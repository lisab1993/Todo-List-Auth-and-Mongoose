import './App.css';
// import SignupForm from './signup-form'
import LoginForm from './login-form'
import Home from './home'
// import { useHistory, Redirect } from "react-router-dom";

import React from 'react';
// import { token } from 'morgan';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: ""
    }
    this.getToken = this.getToken.bind(this)
  }

  getToken(data) {
    this.setState({ token: data.token })
    console.log('this is our token' + this.state.token)
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route>
            {this.state.token ? <Home /> : <LoginForm getToken={this.getToken}/>}
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
