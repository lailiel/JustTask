// login + signup toggle card/modal

import Container from "react-bootstrap/Container";
import LoginToggle from "../components/LoginSignup";

export default function AboutPage() {
  return (
    <Container fluid className="p-5" id="homepage">
      <LoginToggle/>
    </Container>
  );
}