// task card

import Container from "react-bootstrap/Container";
import TaskCreation from "../components/TaskCreation";

export default function AboutPage() {
  return (
    <Container fluid className="py-5 px-4" id="task-creation-page">
      <h2>New Task</h2>
      <TaskCreation/>
    </Container>
  );
}