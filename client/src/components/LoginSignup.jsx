import React, { useState } from "react";
import { Card, Form, InputGroup, Button } from "react-bootstrap";
import { validateEmail } from "../components/utils/helpers";

const LoginToggle = () => {
  const [activeCard, setActiveCard] = useState("login");

  const handleCardChange = (cardId) => {
    setActiveCard(cardId);
    setErrorMessage("")
  };
  // --------------------------------------------------------------------------

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // --------------------------------------------------------------------------

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // ---------------------------------------------

  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;

    if (inputType === "name") {
      if (name == "") {
        setErrorMessage("Please enter a name");
      }
    } else if (inputType === "email") {
      if (!validateEmail(email) || email == "") {
        setErrorMessage("Please enter a valid email");
      }
    } else {
      if (message == "") {
        setErrorMessage("Please enter password");
      }
    }
  };

  // --------------------------------------------------------------------------

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
                onBlur={handleBlur}
                onChange={handleInputChange}
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
                onBlur={handleBlur}
                onChange={handleInputChange}
              />
            </InputGroup>
          </div>
          <div>
            <Button onClick={() => setErrorMessage("coming soon")}>SUBMIT</Button>
            <Button className="mx-3" onClick={() => handleCardChange("signup")}>
              SIGNUP
            </Button>
          </div>
          <div>
            {errorMessage}
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
                onBlur={handleBlur}
                onChange={handleInputChange}
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
                onBlur={handleBlur}
                onChange={handleInputChange}
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
                onBlur={handleBlur}
                onChange={handleInputChange}
              />
            </InputGroup>
          </div>
          <div>
            <Button onClick={() => setErrorMessage("coming soon")}>SUBMIT</Button>
            <Button className="mx-3" onClick={() => handleCardChange("login")}>
              LOGIN
            </Button>
          </div>
          <div>
            {errorMessage}
          </div>
        </Card>
      )}
    </>
  );
};
export default LoginToggle;
