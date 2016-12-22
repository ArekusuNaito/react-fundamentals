var USER_DATA =
{
  name: 'Alex',
  username: 'ArekusuNaito',
  image: "http://pre08.deviantart.net/e357/th/pre/f/2016/195/b/7/bara_by_kuvshinov_ilya-daa1mf5.jpg"
}

// {
//   name: 'Joy McJoyce',
//   username: 'Joy.of',
//   image: "http://pre08.deviantart.net/e357/th/pre/f/2016/195/b/7/bara_by_kuvshinov_ilya-daa1mf5.jpg"
// }

var React = require('react');
var ReactDOM = require('react-dom');

//f(d) = V
//data returns a View

var ProfilePic = React.createClass(
  {
      render: function()
      {
        console.log(this.props);
        return (<img src={this.props.imageURL} style={{height: 100,width: 100}} />)
      }
  })

var ProfileLink = React.createClass(
  {
    render: function()
    {
      console.log(this.props);
      return(
        <div>
          <a href={"https://github.com/"+ this.props.username} >
            {this.props.username}
          </a>
        </div>
      )
    }
  }
)

var ProfileName = React.createClass(
  {
    render: function()
    {
      console.log(this.props);
      return(
        <div>{this.props.name}</div>
      )
    }
  }
)



var Avatar = React.createClass(
  {
    render : function()
    {
      console.log(this.props);
      return(
        <div>
          <ProfilePic imageURL={this.props.user.image} />
          <ProfileName name={this.props.user.name} />
          <ProfileLink username={this.props.user.username} />
        </div>
      )
    }
  }
)

ReactDOM.render
(
  <Avatar user={USER_DATA}/>, document.getElementById('app')
)


//Example 1 for props
// var HelloWorld = React.createClass(
//   {
//     render: function()
//     {
//       //Pure function
//       console.log(this.props);
//       return (
//         <div> Hello {this.props.name} your favorite color is {this.props.favoriteColor} </div>
//       )
//     }
//   }
// )
//
// ReactDOM.render(
//   <HelloWorld name="Joy" favoriteColor="Blue"/>, document.getElementById('app')
// )
