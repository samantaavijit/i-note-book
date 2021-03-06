import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import AddNote from "./components/AddNote";
import MyAlert from "./components/MyAlert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React, { Component } from "react";
import NoteContext from "./context/notes/NoteContext";

export default class App extends Component {
  static contextType = NoteContext;
  render() {
    const { alert } = this.context;
    return (
      <>
        <Router>
          <NavBar />
          <MyAlert alert={alert} />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/createnote">
                <AddNote />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
