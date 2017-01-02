var React = require('react');
var PropTypes = React.PropTypes; //Prop types are really important stuff. Specially on large teams
var MainContainer = require('./MainContainer')
//Styles
var transparentBg = require('../styles').transparentBg




//Create functional stateless components
//Separation of UI from Logic :)
var Prompt = function(props)
{
  return(
    <MainContainer>
      <h1>{props.header}</h1>
      <form onSubmit={props.onSubmitUser}>
        <input
          className=""
          placeholder="Github Username"
          onChange={props.onUpdateUser}
          type="text"
          value={props.username}
        />
        <button
          className="btn"
          type="submit">Continue</button>
      </form>
    </MainContainer>
  )
}

Prompt.propTypes =
{
  //Creating hard typing. This must be a string
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

//I tend to forget to export the component
//I have to keep in mind the exports
module.exports = Prompt
