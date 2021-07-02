/* eslint-disable no-param-reassign, operator-assignment */


class NavBar extends React.Component{
    render(){
        return (

        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">NIKE RATE</a>
        </nav>
      );
    }
}

/* Another way to write React UI Component */
/*
const HelloWorld = React.createClass({
    render() { return(<p>Hello, World.</p>)}
})
*/

ReactDOM.render(
    <NavBar />,
    document.getElementById('navbar')
  );