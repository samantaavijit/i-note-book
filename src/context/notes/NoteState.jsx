import NoteContext from "./NoteContext";

import React, { Component } from "react";

export default class NoteState extends Component {
  state = {
    name: "Avijit",
    notes: [
      {
        _id: "615c46e8bebf7d57f7bd87d0",
        user: "615c3046f5444fccb80a7aa9",
        title: "Demo title in update",
        description: "This is description update",
        tag: "personal",
        date: "2021-10-05T12:36:56.078Z",
        __v: 0,
      },
      {
        _id: "615c474fbebf7d57f7bd87d3",
        user: "615c3046f5444fccb80a7aa9",
        title: "Demo title",
        description: "This is description",
        tag: "personal",
        date: "2021-10-05T12:38:39.582Z",
        __v: 0,
      },
      {
        _id: "615c47b67a1d8590a34f9d4a",
        user: "615c3046f5444fccb80a7aa9",
        title: "Demo title 3",
        description: "This is description 3",
        tag: "personal",
        date: "2021-10-05T12:40:22.223Z",
        __v: 0,
      },
      {
        _id: "615c474fbebf7d57f7ubd87d3",
        user: "615c3046f5444fccb80a7aa9",
        title: "Demo title",
        description: "This is description",
        tag: "personal",
        date: "2021-10-05T12:38:39.582Z",
        __v: 0,
      },
      {
        _id: "615c47b67a1d8590atr34f9d4a",
        user: "615c3046f5444fccb80a7aa9",
        title: "Demo title 3",
        description: "This is description 3",
        tag: "personal",
        date: "2021-10-05T12:40:22.223Z",
        __v: 0,
      },
    ],
  };
  // Add a note
  addNote = (title, description, tag) => {
    // TODO API CALL
  };
  // Delete note
  deletNote = () => {};
  // Edit note
  editNote = () => {};
  render() {
    const { notes } = this.state;
    const { addNote, deletNote, editNote } = this;
    return (
      <div>
        <NoteContext.Provider value={{ notes, addNote }}>
          {this.props.children}
        </NoteContext.Provider>
      </div>
    );
  }
}
