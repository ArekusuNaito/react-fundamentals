var React = require('react');
var Prompt=require('../components/Prompt')
//Styles
var transparentBg = require('../styles').transparentBg

var PromptContainer = React.createClass(
  {
    contextTypes:{
      router: React.PropTypes.object.isRequired
    },
    getInitialState: function ()
    {
      return{
        username: ''
      }
    },
    handleUpdateUser: function(event) //event coming from the input field
    {
      this.setState(
        {
          username: event.target.value
        }
      )
    },
    handleSubmitUser: function(event)
    {
      event.preventDefault();
      var username = this.state.username;
      // reset state
      this.setState(
        {
          username: ''
        }
      )

      //route parameters are the ones after the colon ':'
      ///playerTwo:playerOne
      //Introducing context in react
      if(this.props.routeParams.playerOne)
      {
        //go to /battle
        //two ways of using router.push
        //1. making queries, using an object
        this.context.router.push(
          {
            pathname: '/battle',
            query: //Basically GET parameters
            {
              playerOne: this.props.routeParams.playerOne,
              playerTwo: this.state.username
            }
          }
        )
      }
      else
      {
        console.log(this.context);
        //otherwise go to /playerTwo
        this.context.router.push('/playerTwo/'+ this.state.username) //A pretty simple push, no object or queries
      }
    },

    render: function ()
    {
      //Separation of Business logic from Presentation Logic
      return (
        <Prompt
          onSubmitUser={this.handleSubmitUser}
          onUpdateUser={this.handleUpdateUser}
          header={this.props.route.header}
          username={this.state.username} />
      )
      }
  }
)

module.exports = PromptContainer;
