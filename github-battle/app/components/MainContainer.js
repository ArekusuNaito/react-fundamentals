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
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      {props.children}
    </div>
  )
}


module.exports = MainContainer;
