import React from 'react';
import ReactDOM from 'react-dom';

const title = 'United remote frontend coding challenge';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();