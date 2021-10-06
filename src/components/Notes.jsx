import React, { Component } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

export default class Notes extends Component {
  render() {
    const { notes } = this.context;
    return (
        <div className="row">
            <h2 className="text-center">Your Notes</h2>
        {notes.map((note) => {
            return <NoteItem note={note} key={note._id} />;
        })}
      </div>
    );
  }
}
Notes.contextType = NoteContext;
