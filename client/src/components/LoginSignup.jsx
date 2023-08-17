import React, { useState } from "react";
import { Card, Form, InputGroup, Button } from "react-bootstrap";
import { validateEmail } from "../components/utils/helpers";
import { useMutation } from '@apollo/client';
import { CREATE_USER , LOGIN_USER} from '../components/graphql/mutations'
import  AuthService  from '../components/utils/auth';



const LoginToggle = () => {
  const [activeCard, setActiveCard] = useState("login");

  const handleCardChange = (cardId) => {
    setActiveCard(cardId);
    setErrorMessage("")
  };
  // --------------------------------------------------------------------------

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER)

  const addUser = () => {
    console.log(name, email, password)
    createUser( {variables:
      {
        name: name,
        email: email,
        password: password
    }})
    if (error){
      console.log(error)
    }
    window.location.assign('/dashboard');
  }
  // --------------------------------------------------------

  const [login, { data }] = useMutation(LOGIN_USER);

  
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(email, password);
    try {
      const { data } = await login({
        variables: { 
          email: email,
          password: password
        },
      });

      AuthService.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    window.location.assign('/dashboard')
  }

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
      setPassword(inputValue);
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
      if (password == "") {
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
                type="email"
                className="form-control"
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
                type="password"
                className="form-control"
                aria-describedby="basic-addon2"
                onBlur={handleBlur}
                onChange={handleInputChange}
              />
            </InputGroup>
          </div>
          <div>
            <Button onClick={ handleLogin }>SUBMIT</Button>
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
                className="form-control"
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
                type="email"
                className="form-control"
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
                type="password"
                id="form-control"
                aria-describedby="basic-addon2"
                onBlur={handleBlur}
                onChange={handleInputChange}
              />
            </InputGroup>
          </div>
          <div>
            <Button onClick={ addUser }>SUBMIT</Button>
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
