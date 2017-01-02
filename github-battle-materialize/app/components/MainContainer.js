var React = require('react');
var PropTypes = React.PropTypes;
//Components
var Link = require('react-router').Link
//Styling
var styles = require('../styles')

function MainContainer(props)
{
  //Don't forget to use {props.children} otherwise you won't render anything ;)
  return(
    <div className="valign-wrapper center-align">
      <div className="row">
          {props.children}
      </div>
    </div>
  )
}


module.exports = MainContainer;
