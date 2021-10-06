import NoteContext from "./NoteContext";

import React, { Component } from "react";

export default class NoteState extends Component {
  host = "http://localhost:5000";
  state = {
    notes: [],
  };

  //  GET all Notes
  getAllNotes = async () => {
    const response = await fetch(`${this.host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1YzMwNDZmNTQ0NGZjY2I4MGE3YWE5In0sImlhdCI6MTYzMzQzOTk2MX0.hIFGPJ3G5DyBawsY6v-ba_gejS2Sg1y30d-ri8Jeffw",
      },
    });
    const notes = await response.json();
    this.setState({ notes });
    console.log(notes);
  };

  //  ADD an new Note
  addNote = async (data) => {
    const response = await fetch(`${this.host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1YzMwNDZmNTQ0NGZjY2I4MGE3YWE5In0sImlhdCI6MTYzMzQzOTk2MX0.hIFGPJ3G5DyBawsY6v-ba_gejS2Sg1y30d-ri8Jeffw",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  };
  // DELETE a Note
  deleteNote = async (id) => {
    const response = await fetch(`${this.host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1YzMwNDZmNTQ0NGZjY2I4MGE3YWE5In0sImlhdCI6MTYzMzQzOTk2MX0.hIFGPJ3G5DyBawsY6v-ba_gejS2Sg1y30d-ri8Jeffw",
      },
    });
    const notes = this.state.notes.filter((note) => { return note._id !== id })
    this.setState({notes})
  };
  // EDIT a Note
  editNote = async (id, data) => {
    const response = await fetch(`${this.host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1YzMwNDZmNTQ0NGZjY2I4MGE3YWE5In0sImlhdCI6MTYzMzQzOTk2MX0.hIFGPJ3G5DyBawsY6v-ba_gejS2Sg1y30d-ri8Jeffw",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
  };
  render() {
    const { notes } = this.state;
    const { addNote, deleteNote, editNote, getAllNotes } = this;
    return (
      <div>
        <NoteContext.Provider
          value={{ notes, addNote, deleteNote, editNote, getAllNotes }}
        >
          {this.props.children}
        </NoteContext.Provider>
      </div>
    );
  }
}
