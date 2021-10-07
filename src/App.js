import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import AddNote from "./components/AddNote";
import MyAlert from "./components/MyAlert";
import Login from "./components/Login";
import Signup from "./components/Signup";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    alert: null,
  };
  showAlert = (msg, type, interval = 4500) => {
    this.setState({
      alert: {
        msg: msg,
        type: type,
      },
    });
    setTimeout(() => {
      this.setState({ alert: null });
    }, interval);
  };
  render() {
    return (
      <>
        <NoteState>
          <Router>
            <NavBar />
            <MyAlert alert={this.state.alert} />
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <Home showAlert={this.showAlert.bind()} />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/createnote">
                  <AddNote showAlert={this.showAlert.bind()} />
                </Route>
                <Route exact path="/login">
                  <Login showAlert={this.showAlert.bind()} />
                </Route>
                <Route exact path="/signup">
                  <Signup showAlert={this.showAlert.bind()} />
                </Route>
              </Switch>
            </div>
          </Router>
        </NoteState>
      </>
    );
  }
}
