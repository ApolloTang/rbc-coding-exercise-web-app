
const fonts = [
  'fontawesome-webfont.ttf',
];

fonts.forEach(font=>{
  const pathToFont = './fonts/'+font;
  require(`${pathToFont}`);   // this is required, otherwise fontawesome does not load
});

require('./font-awesome.css');
