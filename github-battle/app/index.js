var React = require('react');
var ReactDOM = require('react-dom');

//f(d) = V
//data returns a View

var routes = require('./config/routes');
//Created 2 components.
//Whenever the main component it just render whatever the props are

ReactDOM.render
(
  routes, document.getElementById('app')
)
