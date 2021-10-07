import React, { Component } from "react";
import { Alert } from "react-bootstrap";

export default class MyAlert extends Component {
  render() {
    return (
      this.props.alert && (
        <Alert variant={`${this.props.alert.type}`}>
          <strong>{this.props.alert.msg}</strong>
        </Alert>
      )
    );
  }
}
