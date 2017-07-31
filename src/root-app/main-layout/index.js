import React from 'react';

import style from './style.scss';

const Layout = ({head, body, foot}) => (
  <div className={`main-layout ${style['module-style']}`}>
    <div className="head">{head}</div>
    <div className="body">{body}</div>
  </div>
);


export default Layout;
