var React = require('react');
var PropTypes = React.PropTypes;
//Components
var Link = require('react-router').Link
var MainContainer = require('./MainContainer')
var UserDetails = require('./UserDetails')
var UserDetailsWrapper = require('./UserDetailsWrapper')
//Styling
var styles = require('../styles')

function StartOver()
{
  return(
    <div className="col s12 m12" style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn'>Start Over</button>
      </Link>
    </div>
  )
}

function Results(props)
{
  //Props:
  //isLoading,Scores and the Players Info

  if(props.isLoading)
  {
    return(
      <h2>LOADING...</h2>
    )
  }
  //What happens if we get a Tie?
  //Tie Handling:
  if(props.scores[0] === props.scores[1])
  {
    return(
      <MainContainer>
        <h1>It's a Tie</h1>
        <StartOver/>
      </MainContainer>
    )
  }
  //If it's not a tie...
  var winningIndex = props.scores[0] > props.scores[1]? 0:1;
  var losingIndex = winningIndex === 0? 1:0;
  return(
    <MainContainer>
      <h1>Results</h1>
      <div className="col s8 offset-s2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver/>
    </MainContainer>
  )
}

Results.propTypes =
{
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired,
}

module.exports = Results;
