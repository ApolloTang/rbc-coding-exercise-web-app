import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import {history} from './create-history';
import store from './store';
import { Provider } from 'react-redux';

import {BrowserRouter} from 'react-router-dom';

import RootApp from 'root-app';

import style from './style.scss';

const Root = ()=>(
  <div className={`root-infarstructure ${style['module-style']}`}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RootApp />
      </ConnectedRouter>
    </Provider>
  </div>
);

// const Root = ()=>(
//   <div className={`root ${style['module-style']}`}>
//     <BrowserRouter>
//       <RootApp />
//     </BrowserRouter>
//   </div>
// );

export default Root;

