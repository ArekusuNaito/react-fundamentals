var React = require('react');
var PropTypes = React.PropTypes;

function UserDetails (user)
{
  //By using boolean operators we can choose to render or not the component
  //for example:
  //If the user has the blog property go ahead and render with the following markup
  //{user.info.blog && <li className="collection-item">Blog: <a href={user.info.blog}> {user.info.blog}</a></li>}

  return (
    <ul className="collection">
      {!!user.score && <li className="collection-item"><h3>Score: {user.score}</h3></li>}
      <li className="collection-item"> <img src={user.info.avatar_url} className="responsive-img"/></li>
      {user.info.name && <li className="collection-item">Name: {user.info.name}</li>}
      <li className="collection-item">Username: {user.info.login}</li>
      {user.info.location && <li className="collection-item">Location: {user.info.location}</li>}
      {user.info.company && <li className="collection-item">Company: {user.info.company}</li>}
      <li className="collection-item">Followers: {user.info.followers}</li>
      <li className="collection-item">Following: {user.info.following}</li>
      <li className="collection-item">Public Repos: {user.info.public_repos}</li>
      {user.info.blog && <li className="collection-item">Blog: <a href={user.info.blog}> {user.info.blog}</a></li>}
    </ul>
  )
}

UserDetails.propTypes = {
  score: PropTypes.number,
  //Shape it's like create our own Prop-type, notice that we also have non Required proptypes
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired
  })
}

module.exports = UserDetails;
