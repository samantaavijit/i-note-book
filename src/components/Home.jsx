import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router";
import NoteContext from "../context/notes/NoteContext";
import Notes from "./Notes";

export default class Home extends Component {
  static contextType=NoteContext
  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        <Container className="my-3">
          <Notes showAlert={this.props.showAlert}/>
        </Container>
      </>
    );
  }
}

