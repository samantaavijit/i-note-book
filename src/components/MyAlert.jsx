import React, { Component } from 'react'
import { Alert } from "react-bootstrap";

export default class MyAlert extends Component {
    render() {
        return (
            <Alert variant="primary">
                {this.props.message}
            </Alert>
        )
    }
}
