import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

export default class Notes extends Component {
  state = {
    show: false,
    title: "",
    description: "",
    tag: "",
    id: "",
  };
  static contextType = NoteContext;
  async componentDidMount() {
    this.context.getAllNotes();
  }
  // get the update note details
  updateNote = (currentNote) => {
    this.setState({ show: true });
    this.setState({
      title: currentNote.title,
      description: currentNote.description,
      tag: currentNote.tag,
      id: currentNote._id,
    });
  };
  // handle modle close
  handleClose = () => {
    this.setState({ show: false });
  };
  checkValidation = () => {
    const title = this.state.title;
    const description = this.state.description;

    let titleErr = null;
    let descErr = null;

    let isValid = true;

    if (!title || title.length < 3) {
      titleErr = "Title must be atleast 3 characters";
      isValid = false;
    }
    if (!description || description.length < 5) {
      descErr = "Description must be atleast 5 characters";
      isValid = false;
    }

    this.setState({ titleErr, descErr });
    return isValid;
  };
  handleUpdateButton = () => {
    if (this.checkValidation()) {
      const id = this.state.id;
      this.context.editNote(id, this.state);
      this.handleClose();
    }
  };
  render() {
    const { notes } = this.context;
    return (
      <>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  required
                  value={this.state.title}
                  onChange={(e) => {
                    this.setState({ title: e.target.value });
                  }}
                />
                <Form.Text className="text-danger">
                  {this.state.titleErr}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  type="text"
                  value={this.state.description}
                  placeholder="Enter Description"
                  style={{ height: "100px" }}
                  onChange={(e) => {
                    this.setState({ description: e.target.value });
                  }}
                />
                <Form.Text className="text-danger">
                  {this.state.descErr}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="tag">
                <Form.Label>Tag</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.tag}
                  placeholder="Enter tag"
                  onChange={(e) => {
                    this.setState({ tag: e.target.value });
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={this.handleUpdateButton}
            >
              Update Note
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="row">
          <h2 className="text-center">Your Notes</h2>
          {notes.map((note) => {
            return (
              <NoteItem
                note={note}
                key={note._id}
                updateNote={this.updateNote}
              />
            );
          })}
        </div>
      </>
    );
  }
}
