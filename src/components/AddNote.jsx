import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import NoteContext from "../context/notes/NoteContext";

export default class AddNote extends Component {
  state = {
    title: "",
    description: "",
    tag: "",
    alert: null,
  };
  static contextType = NoteContext;

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

  addNote = async () => {};
  formSubmit = (e) => {
    e.preventDefault();
    if (this.checkValidation()) {
      this.context.addNote(this.state);
      document.getElementById("myForm").reset();
    }
  };
  render() {
    return (
      <>
        <Container className="my-3 mx-5">
          <h1 className="text-center">Add a new Note</h1>
          <Form onSubmit={this.formSubmit} id="myForm">
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                required
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
                placeholder="Enter tag"
                onChange={(e) => {
                  this.setState({ tag: e.target.value });
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Note
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}
