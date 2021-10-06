import React, { Component } from "react";
import NoteContext from "../context/notes/NoteContext";

export default class About extends Component {

  render() {
    return <div>This is About</div>;
  }
}
About.contextType = NoteContext;
