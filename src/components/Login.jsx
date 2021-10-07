import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Redirect } from "react-router";
import validator from "validator";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  checkValidation = () => {
    const email = this.state.email;
    const password = this.state.password;
    let isValid = true;

    let emailErr = null;
    let passwordErr = null;
    if (!validator.isEmail(email)) {
      isValid = false;
      emailErr = "Enter valid Email";
    }
    if (password.length < 6) {
      isValid = false;
      passwordErr = "Enter valid password";
    }
    this.setState({ emailErr, passwordErr });
    return isValid;
  };
  loginForn = (e) => {
    e.preventDefault();
    if (this.checkValidation()) {
      this.login();
    }
  };
  login = async () => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    });
    if (response.ok) {
      // SAVE the token and redirect to login page
      const result = await response.json();
        localStorage.setItem("token", result.authToken);
        this.setState({email:null})
    } else {
      console.log(response);
    }
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <Container>
          <Form onSubmit={this.loginForn} id="login_form">
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <Form.Text className="text-danger">
                {this.state.emailErr}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <Form.Text className="text-danger">
                {this.state.passwordErr}
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
