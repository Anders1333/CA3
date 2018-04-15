import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, NavLink,} from "react-router-dom";
import facade from "./ApiFacade";
import ShipTable from "./ShipTable";
import PersonTable from "./PersonTable";
import PlanetTable from "./PlanetTable";




// -------------------------------------------------- LOGIN ------------------------------------------//
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }

  }
  login = (evt) => {
    evt.preventDefault();
    this.props.login(this.state.username, this.state.password);


  }
  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value })
  }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <br />
        <div className="row">
          <div className="col-sm-6">
            <form className="form-horizontal" onSubmit={this.login} onChange={this.onChange} >
              <div className="form-group">
                <label className="control-label col-sm-2">Username</label>
                <div className="col-sm-10">
                  <input className="form-control" placeholder="User Name" id="username" type="text" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-sm-2">Password</label>
                <div className="col-sm-10">
                  <input className="form-control" placeholder="User Name" id="password" type="password" />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Login</button>
                </div>
              </div>
            </form>

          </div>

          <div className="col-sm-6">
            {/*This div is empty :(*/}
          </div>
        </div>
      </div>
    )
  }
}

class LoggedIn extends Component {
  render() {
    return (
      <div>
        <h2>Hello</h2>
        <h4>Choose your category</h4>
        <br />
      </div>
    )
  }
}


const NavigationMenu = () => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <NavLink className="navbar-brand" exact to="/">CA3</NavLink>
      </div>
      <ul className="nav navbar-nav">
        <li><NavLink exact to="/">Welcome</NavLink></li>
        <li><NavLink to="/loginPage">Profile</NavLink></li>
      </ul>
    </div>
  </nav>
)


const Welcome = ({ match }) => (
  <div>
    <h1>Welcome to CA3!</h1>
    <p>Click the <NavLink to="/loginPage">Login</NavLink> link to login</p>
  </div>
)

// --------------------------------------------- APP -------------------------------------------------//
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      resultList: "empty"
    }

  };

  logout = (user, pass) => {
    facade.logout(user, pass)
    this.setState({ loggedIn: false });
  }
  login = (user, pass) => {
    facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true }));
  }


  render() {
    return (
      <Router>
        <Switch>
          <div>
            <NavigationMenu/>          
            <div className="container-fluid">
              <Route exact path="/" render={() => <div><Welcome /></div>} />
              <Route path="/spaceships" render={() => <div><ShipTable facade={facade} /></div>} />
              <Route path="/persons" render={() => <div><PersonTable facade={facade} /></div>} />
              <Route path="/planets" render={() => <div><PlanetTable facade={facade} /></div>} />

              <Route path="/loginPage" render={() => <div>

                {!this.state.loggedIn ? (<LogIn login={this.login} />) :
                  (<div>
                    <LoggedIn />
                    <Switch>
                      <div>
                        <ul className="categoryList">
                          <li><NavLink exact to="/spaceships">Show Spaceships</NavLink></li>
                          <li><NavLink exact to="/persons">Show Persons</NavLink></li>
                          <li><NavLink exact to="/planets">Show Planets</NavLink></li>
                        </ul>
                      </div>
                    </Switch>

                    <button className="btn btn-default" onClick={this.logout}>Logout</button>
                  </div>)}
              </div>} />

            </div>
          </div>
        </Switch>
      </Router>
    )
  }
}
export default App;


