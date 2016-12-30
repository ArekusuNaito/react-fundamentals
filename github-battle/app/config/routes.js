var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");

// Maps URL to ceirtain components

var PromptContainer = require('../containers/PromptContainer')

//Inside routes there's  JSX
//No matter what path someone goes to, make sure Main is active
//For example, Twitter's TitleBar/Header is always active, no matter what path we are in
//The router tracks which children are activated
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header="Player One" component={PromptContainer}/>
      <Route path='playerTwo/:playerOne' header="Player Two" component={PromptContainer}/>
    </Route>
  </Router>
);

module.exports = routes;
