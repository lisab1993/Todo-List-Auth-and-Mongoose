import './App.css';
import SignupForm from './signup-form'
// import { useHistory, Redirect } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      typingBox: "",
    }
  }

  render() {
    return(
      <div>
        <SignupForm />
      </div>
    )
  }
}

export default App;
