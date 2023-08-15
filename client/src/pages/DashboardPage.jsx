import Container from "react-bootstrap/Container";
import TaskComponent from "../components/TaskCreation";

export default function AboutPage() {
  return (
    <Container fluid className="p-5" id="homepage">
      <div className="">
        <h2>DASHBOARD</h2>
      </div>
      <TaskComponent/>

      <div id='home-text'>
        <p>THIS IS A TEST</p>

      </div>
    </Container>
  );
}