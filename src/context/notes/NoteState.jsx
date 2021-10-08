import NoteContext from "./NoteContext";

import React, { Component } from "react";

export default class NoteState extends Component {
  host = "http://localhost:5000";
  state = {
    notes: [],
    alert: null,
  };

  // SHOW Alert
  showAlert = (msg, type, interval = 3000) => {
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

  //  GET all Notes
  getAllNotes = async () => {
    const response = await fetch(`${this.host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const notes = await response.json();
    this.setState({ notes });
  };

  //  ADD an new Note
  addNote = async (data) => {
    const response = await fetch(`${this.host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      this.showAlert("Note Added successfully", "success");
    } else {
      this.showAlert("Try again !", "danger");
    }
  };
  // DELETE a Note
  deleteNote = async (id) => {
    const response = await fetch(`${this.host}/api/notes/deletenotey/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    if (response.ok) {
      const notes = this.state.notes.filter((note) => {
        return note._id !== id;
      });
      this.setState({ notes });
      this.showAlert("Note Deleted successfully", "success");
    } else {
      this.showAlert("Try again !", "danger");
    }
  };

  // EDIT a Note
  editNote = async (id, data) => {
    const response = await fetch(`${this.host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      data = JSON.parse(JSON.stringify(data));
      let newNotes = JSON.parse(JSON.stringify(this.state.notes));

      for (let i = 0; i < newNotes.length; i++) {
        const element = newNotes[i];
        if (element._id === id) {
          newNotes[i].title = data.title;
          newNotes[i].description = data.description;
          newNotes[i].tag = data.tag;
          break;
        }
      }
      this.setState({ notes: newNotes });
      this.showAlert("Note Updated successfully", "success");
    } else {
      this.showAlert("Try again !", "danger");
    }
  };
  render() {
    const { notes, alert } = this.state;
    const { addNote, deleteNote, editNote, getAllNotes, showAlert } = this;
    return (
      <div>
        <NoteContext.Provider
          value={{
            notes,
            alert,
            addNote,
            deleteNote,
            editNote,
            getAllNotes,
            showAlert,
          }}
        >
          {this.props.children}
        </NoteContext.Provider>
      </div>
    );
  }
}
