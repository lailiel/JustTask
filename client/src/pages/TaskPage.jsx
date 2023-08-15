// task card

import Container from "react-bootstrap/Container";
import TaskComponent from "../components/TaskCreation";

export default function AboutPage() {
  return (
    <Container fluid className="p-5" id="homepage">
           <TaskComponent/>
    </Container>
  );
}