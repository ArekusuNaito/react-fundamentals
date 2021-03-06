var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper (props)
{
  //Notice that we use a header, you know to render a custom header
  //Also it's super important to notice the {props.children}
  //{props.children} allows us to render our <UserDetails /> component. Check this on ConfirmBattle.js
  return (
    <div className='col s6 m6'>
      <p className='lead'>{props.header}</p>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.propType = {
  header: PropTypes.string.isRequired,
}

module.exports = UserDetailsWrapper;
