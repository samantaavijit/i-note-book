import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Redirect } from "react-router";

export default class NavBar extends Component {
  logout = () => {
    localStorage.removeItem("token");

  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            iNoteBook
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/createnote">
                  Add note
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
              {!localStorage.getItem("token") ? (
                <Link
                  className="btn btn-primary mx-1"
                  type="button"
                  to="/signup"
                >
                  Sign Up
                </Link>
              ) : (
                <button
                  className="btn btn-success mx-1"
                  type="button"
                  onClick={this.logout}
                >
                  Logout
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
