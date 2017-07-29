import React from 'react';

import style from './style.scss';

const Layout = ({head, body, foot}) => (
  <div className={`main-layout ${style['module-style']}`}>
    <div className="head">{head}</div>
    <div className="body">{body}</div>
    <div className="foot">{foot}</div>
  </div>
);


export default Layout;
