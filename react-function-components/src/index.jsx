import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(buttonText) {
  return <button>{buttonText.content}</button>;
}
const element = <CustomButton content="Click Me!" />;
ReactDOM.render(element, document.getElementById('root'));
