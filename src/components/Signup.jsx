import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import validator from "validator";
import NoteContext from "../context/notes/NoteContext";

export default class Signup extends Component {
  static contextType = NoteContext;
  state = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  };
  checkValidation = () => {
    const name = this.state.name;
    const email = this.state.email;
    const pass = this.state.password;
    const cpass = this.state.cpassword;

    let isValid = true;

    let nameErr = null;
    let emailErr = null;
    let passErr = null;
    let cpassErr = null;

    if (name.length < 5) {
      isValid = false;
      nameErr = "Enter valid name";
    }
    if (!validator.isEmail(email)) {
      isValid = false;
      emailErr = "Enter valid email";
    }
    if (pass.length < 6) {
      isValid = false;
      passErr = "Password must be atleast 6 characters";
    }
    if (cpass !== pass) {
      isValid = false;
      cpassErr = "Password does not match";
    }
    this.setState({ nameErr, emailErr, passErr, cpassErr });
    return isValid;
  };
  signUpForm = (e) => {
    e.preventDefault();
    if (this.checkValidation()) {
      this.createAccount();
    }
  };
  createAccount = async () => {
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    });
    const result = await response.json();
    if (response.ok) {
      this.context.showAlert("Account created successfully", "success");
    } else {
      this.context.showAlert(result.error, "danger");
    }
    document.getElementById("myForm").reset();
  };
  render() {
    return (
      <>
        <Container className="mt-3">
        <h2 className="text-center ">Create an account to use iNoteBook</h2>
          <Form onSubmit={this.signUpForm} id="myForm">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter name"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
              />
              <Form.Text className="text-danger">
                {this.state.nameErr}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="Enter email"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              />
              <Form.Text className="text-danger">
                {this.state.emailErr}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="Password"
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              />
              <Form.Text className="text-danger">
                {this.state.passErr}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="cpassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="Confirm Password"
                onChange={(e) => {
                  this.setState({ cpassword: e.target.value });
                }}
              />
              <Form.Text className="text-danger">
                {this.state.cpassErr}
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}
