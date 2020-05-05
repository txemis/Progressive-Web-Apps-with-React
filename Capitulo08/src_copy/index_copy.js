
//var React = require('react');
//var ReactDOM =require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

//Antiguo:
//ReactDOM.render(React.createElement('h1', false, 'Hello from react!'), document.getElementById('root'));
//Nuevo:
//ReactDOM.render(<h1>Hello from ES6!</h1>, document.getElementById('root'));
ReactDOM.render(<App />,document.getElementById('root'));
