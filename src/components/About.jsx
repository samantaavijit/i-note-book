import React, { Component } from "react";
import NoteContext from "../context/notes/NoteContext";

export default class About extends Component {
  render() {
    console.log(this.context);
      return <div>This is About { this.context.name}</div>;
  }
}
About.contextType = NoteContext;
