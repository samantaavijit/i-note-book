import React, { Component } from "react";
import { Card } from "react-bootstrap";
import NoteContext from "../context/notes/NoteContext";

export default class NoteItem extends Component {
  static contextType = NoteContext;
  render() {
    const { note } = this.props;
    const { deleteNote } = this.context;
    return (
      <>
        <div className="col-md-3">
          <Card className="my-2">
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <Card.Text>{note.description}</Card.Text>
              <small className="text-muted">{new Date(note.date).toGMTString() }</small>
            </Card.Body>
            <Card.Footer>
              <i
                className="fa fa-trash-o mx-2 text-danger"
                onClick={() => {
                  deleteNote(note._id);
                }}
              />
              <i className="fa fa-edit mx-2" />
            </Card.Footer>
          </Card>
        </div>
      </>
    );
  }
}
