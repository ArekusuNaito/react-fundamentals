var axios = require('axios')

// If you want to get Github API KEYS this is where you will put them
var clientID = "YOUR_CLIENT_ID";
var secretID = "YOUR_SECRET_ID";
var param = "?client_id="+clientID+"&client_secret="+secretID;

function getUserInfo(username)
{
  return axios.get('https://api.github.com/users/'+username)
}

function getRepositories(username)
{
  //fetch username repositories
  return axios.get('https://api.github.com/users/'+username+'/repos'+param+'&per_page=100')
}

function getTotalStars(repositories)
{
  //calculate all the stars that the user has
  //By looping in all our repos and counting our stars
  return repositories.data.reduce(function(previous,current)
  {
    return previous+current.stargazers_count;
  }, 0) //Initial value = 0
}

function getPlayerData(player)
{
  //will get player repositories
  //then will get the total starts
  //and it will return an object with the data
  return getRepositories(player.login)
  .then(getTotalStars)
  .then(function(totalStars)
  {
    return{
      followers: player.followers,
      totalStars: totalStars
    }
  })
}

function calculateScores(players)
{
  //return an array after some fancy algorithms
  //to determine a winner
  return[
      players[0].followers * 3 + players[0].totalStars,
      players[1].followers * 3 + players[1].totalStars
  ]
}


var helpers =
{
  getPlayersInfo: function(players)
  {
    //this is where we get some data from github

    //map() method creates a new array with the results of calling a provided function on every element in this array.
    //i.e this is declaritive code and a pure function, this doesn't modify our players array
    //axios.all: Performing multiple concurrent requests. Requires an array of promises
    //once each of promises have been resolved it goes to .then()
    return axios.all(players.map(function(username)
    {
      return getUserInfo(username)
    })).then(function(githubUsers)
    {
      // console.log('INFO',info); //All the github info
      //yet we just want return user.data not the whole user data
      return githubUsers.map(function(githubUser)
      {
        return githubUser.data;
      })
    }).catch(function(error)
    {
      console.warn('Error in getPlayersInfo: ',error);
    })
  },
  battle: function(players)
  {
    var player1Data = getPlayerData(players[0]);
    var player2Data = getPlayerData(players[1]);
    return axios.all([player1Data,player2Data])
    .then(calculateScores)
    .catch(function(error){console.warn('Error in Battle: ',error)})
  }
}

module.exports = helpers;
