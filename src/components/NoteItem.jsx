import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class NoteItem extends Component {
  render() {
    const { note } = this.props;
    return (
      <>
        <div className="col-md-3">
          <Card className="my-2">
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <Card.Text>{note.description}</Card.Text>
              <i className="fa fa-trash-o mx-2"/>
              <i className="fa fa-edit mx-2"/>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
