import React, { Component } from "react";
import { Container } from "react-bootstrap";
import NoteContext from "../context/notes/NoteContext";
import Notes from "./Notes";

export default class Home extends Component {
  render() {
    
    return (
      <>
        <Container className="my-3">
          
          <Notes/>
        </Container>
      </>
    );
  }
}
Home.contextType = NoteContext;
