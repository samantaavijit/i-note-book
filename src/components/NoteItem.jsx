import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class NoteItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { note } = this.props;
    return (
      <>
        <div className="col-md-3">
          <Card className="my-2">
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <Card.Text>{note.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
