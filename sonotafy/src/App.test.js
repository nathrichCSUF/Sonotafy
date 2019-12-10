import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Results from './Results.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Results />, div);
  ReactDOM.unmountComponentAtNode(div);
});
