var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer')
//We no longer need styles dependency because the <MainContainer> has it already


var Home = React.createClass({
  render: function () {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">Some fancy motto</p>
        <Link to="/playerOne">
          <button type="button" className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
