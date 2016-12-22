var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass(
  {
    render: function()
    {
      return (
        <div> This div was created using JSX </div>
      )
    }
  }
)

ReactDOM.render(
  <HelloWorld/>, document.getElementById('app')
)
