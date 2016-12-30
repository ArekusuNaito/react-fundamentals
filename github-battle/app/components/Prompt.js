var React = require('react');
var PropTypes = React.PropTypes; //Prop types are really important stuff. Specially on large teams
//Styles
var transparentBg = require('../styles').transparentBg




//Create functional stateless components
//Separation of UI from Logic :)
var Prompt = function(props)
{
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className='form-control'
              onChange={props.onUpdateUser}
              placeholder='Github Username'
              type='text'
              value={props.username} />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>
        </form>
      </div>
    </div>
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
