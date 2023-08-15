import React, { useState } from "react";
import { Card, Form, InputGroup, Button, Row, Col } from "react-bootstrap";

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
        <Card className="login-card p-4" id="login-card">
          <Card.Title id="login-card-title">Login</Card.Title>
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
   
            <Button className="">SUBMIT</Button>
            <Button className="mx-3" onClick={() => handleCardChange("signup")}  >
              SIGNUP
            </Button>

          </div>
        </Card>
      )}

      {activeCard === "signup" && (
        <Card className="signup-card p-4" id="signup-card">
          <Card.Title id="lsignup-card-title">Signup</Card.Title>
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
        
            <Button>SUBMIT</Button>
            <Button className="mx-3" onClick={() => handleCardChange("login")}>
              LOGIN
            </Button>
          
          </div>
        </Card>
      )}
    </>
  );
};
export default LoginToggle;
