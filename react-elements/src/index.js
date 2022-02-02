import React from 'react';
import ReactDOM from 'react-dom';
const firstReact = React.createElement(
  'h1',
  [null],
  [...'Hello, React!']
);
ReactDOM.render(firstReact, document.getElementById('root')
);
