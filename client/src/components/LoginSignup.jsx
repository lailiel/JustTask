import React, { useState } from "react";
import { Card, Form, InputGroup, Button } from "react-bootstrap";

const LoginToggle = () => {
  const [activeCard, setActiveCard] = useState("login");

  const handleCardChange = (cardId) => {
    setActiveCard(cardId);
  };

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");



  return (
    <>
      {activeCard === "login" && (
        <Card class="login-card">
          <Card.Title>Login</Card.Title>
          <div>
            <Form.Label id="form-label">Email:</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="example@email.com"
                aria-label="Email"
                name="email"
                id="form-control"
                aria-describedby="basic-addon2"
              />
            </InputGroup>

            <Form.Label id="form-label">Password:</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                name="password"
                id="form-control"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </div>
          <div>
            <Button>Submit</Button>
            <Button onClick={() => handleCardChange("signup")} variant="primary">
              Signup
            </Button>
          </div>
        </Card>
      )}

      {activeCard === "signup" && (
        <Card class="signup-card">
          <Card.Title>Signup</Card.Title>
          <div>
            <Form.Label id="form-label">Name:</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Name"
                aria-label="Name"
                name="name"
                id="form-control"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <Form.Label id="form-label">Email:</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="example@email.com"
                aria-label="Email"
                name="email"
                id="form-control"
                aria-describedby="basic-addon2"
              />
            </InputGroup>

            <Form.Label id="form-label">Password:</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                name="password"
                id="form-control"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </div>
          <div>
            <Button>Submit</Button>
            <Button
              onClick={() => handleCardChange("login")}
              variant="secondary"
            >
              Login
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};
export default LoginToggle;
