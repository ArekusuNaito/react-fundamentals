var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass(
  {
    getInitialState: function()
    {
      return{
        isLoading: true,
        scores: []
      }
    },
    componentDidMount: function()
    {
      //We want to calculate the score and declare a winner here!
      //We can find our info at
      //props.location.state.playersInfo []
      //Time to battle each other.
      //How many followers and how many
      githubHelpers.battle(this.props.location.state.playersInfo) //We get this info from our router
      .then(function(scores)
      {
        //Battle will return the scores, and remember scores is an array
        //Set the state and bind the this keyword
        //Once the battle ends and the component Did Mount it means we are no longer loading
        this.setState(
          {
            scores: scores,
            isLoading: false
          }
        )
      }.bind(this))

    },
    render: function()
    {

      return(
        <Results
          isLoading={this.state.isLoading}
          scores={this.state.scores}
          playersInfo={this.props.location.state.playersInfo}/>
      )
    }
  }
)


module.exports = ResultsContainer;
