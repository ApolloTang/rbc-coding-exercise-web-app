const pathResolve = require('path').resolve;

const webpack = require('webpack');
const {getIfUtils, removeEmpty} = require('webpack-config-utils');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

// -- configuration -- //
const webpackDevServer_host = '0.0.0.0';
const webpackDevServer_port = 9200;
const sourceMapType = getSourceMapType('b');

const absolutePath_sourceFolder = pathResolve('src');
const absolutePath_buildFolder = pathResolve('public/modules');
const absolutePath_nodeModules = pathResolve('node_modules');
const absolutePath_fonts = pathResolve('src/commmon/styles/fonts');
const absolutePath_contentBase = pathResolve('public');

const config_fn = env => {
  const {ifProd, ifNotProd} = getIfUtils(env);

  if ( env && env.dev && env.debug ) {
      console.log('absolutePath_sourceFolder: ', absolutePath_sourceFolder);
      console.log('absolutePath_sourceFolder: ', absolutePath_sourceFolder);
      console.log('absolutePath_buildFolder: ' , absolutePath_buildFolder);
      console.log('absolutePath_nodeModules: ' , absolutePath_nodeModules);
      console.log('absolutePath_fonts: '       , absolutePath_fonts);
      console.log('absolutePath_public: '      , absolutePath_public);
  }

  const config = {
    devServer: {
      // historyApiFallback: true,
      host: webpackDevServer_host,
      port: webpackDevServer_port
    },
    performance: {
        hints: ( env && env.dev && env.debug ) ? 'warning' : false   // Turn off hint to reduce cluttter on output
    },
    context: absolutePath_sourceFolder,
    entry: {
      vendor: [
        './vendor/third-party-code.js'
      ],
      common: [
        './common/utils/helper.js'
      ],
      main: './main.js'
    },
    output: {
      pathinfo: ifNotProd(),
      publicPath: '/',
      path: absolutePath_buildFolder,
      filename: ifProd(
          'bundle.[name].js',
          'bundle.[name].js'
      )
    },
    resolve: {
      modules: [
        absolutePath_sourceFolder,
        absolutePath_nodeModules
      ],
      extensions: ['.js', '.less', '.css']
    },
    module: {
      loaders: removeEmpty(
        [
          {
            test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$/,
            loader: 'file-loader?name=./imgs/[name].[ext]',
            exclude: absolutePath_fonts
          },
          {
            test: /\.(woff|woff2|ttf|eot|svg|otf)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
            loader: 'file-loader?&name=../fonts/[name].[ext]'
          },
          {
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader!less-loader'
            }),
            include: absolutePath_sourceFolder
          },
          {
            test: /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader!sass-loader'
            }),
            include: absolutePath_sourceFolder
          },
          {
            test: /\.jsx?$/,
            loaders: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      )
    },
    plugins: removeEmpty(
      [
        ifProd(
          new webpack.DefinePlugin({
            target: JSON.stringify('production'),
          }),
          new webpack.DefinePlugin({
            target: JSON.stringify('development'),
          })
        ),
        new ProgressBarPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
          name: [
            'vendor', 'common'
          ]
        }),
        new ExtractTextPlugin('styles.[name].css')
      ]
    ),
    devtool: ifProd( sourceMapType.prod, sourceMapType.dev )

  }

  if ( env && env.debug ) {
    console.log('webpack.config: ', config)
  }
  return config;
};


function getSourceMapType (type) {
  const types = {
    'a': {
      // Shows uncompiled webpack source code during development mode (use this when debug webpack)
      prod: 'source-map',     // production enviroment: source map in separate file
      dev:  'eval'            // non production env:    inline source map
    },
    'b': {
      // Shows original code during development mode (use this when debug application)
      prod: 'source-map',     // production enviroment: source map in separate file
      dev:  'eval-source-map' // non production env:    inline source map
    },
    'c': {
      // Won't pause in debugger, and show no code (don't use this)
      prod: 'cheap-module-eval-source-map',     // production enviroment: source map in separate file
      dev:  'cheap-module-eval-source-map'      // non production env:    inline source map
    }
  };
  return types[type];
}

module.exports = config_fn;

