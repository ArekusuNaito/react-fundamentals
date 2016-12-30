var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle')
var githubHelpers = require('../utils/githubHelpers')

var ConfirmBattleContainer = React.createClass(
  {
    contextTypes:
    {
      router: React.PropTypes.object.isRequired
    },
    //#### LIFE CYCLE EVENTS ON REACT
    getInitialState: function()
    {
      console.log("Confirm Battle Container: getInitialState()");
      return{
        isLoading: true,
        playersInfo: []
      }
    },
    componentWillMount: function()   //#### LIFE CYCLE EVENTS ON REACT
    {
      console.log("Confirm Battle Container: componentWillMount()");
    },
    componentDidMount: function()  //#### LIFE CYCLE EVENTS ON REACT
    {
      console.log("Confirm Battle Container: componentDidMount()");
      var query = this.props.location.query;
      //Fetch info from github then update state :)
      githubHelpers.getPlayersInfo([query.playerOne,query.playerTwo])
      .then(function(players)
      {
        this.setState(
          {
            isLoading:false,
            playersInfo: [players[0], players[1]]
          }
        )
      }.bind(this))

    },
    componentWillUnmount: function()  //#### LIFE CYCLE EVENTS ON REACT
    {
      console.log("Confirm Battle Container: componentWillUnmount()");
    },
    render: function()
    {
      return(
        <ConfirmBattle
          isLoading={this.state.isLoading}
          playersInfo={this.state.playersInfo}
        />
      )
    }
  }
)

module.exports = ConfirmBattleContainer
