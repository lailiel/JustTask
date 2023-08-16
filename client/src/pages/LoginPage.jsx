// login + signup toggle card/modal

import Container from "react-bootstrap/Container";
import LoginToggle from "../components/LoginSignup";

export default function AboutPage() {
  return (
    <Container fluid className="py-5 px-4" id="login-signup">
      <LoginToggle/>
    </Container>
  );
}