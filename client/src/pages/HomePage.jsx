import Container from "react-bootstrap/Container";
import TaskComponent from '../components/TaskCard'

export default function AboutPage() {
  return (
    <Container fluid className="p-5" id="homepage">
      <div className="">
        <h2>HOMEPAGE</h2>
      </div>
      <TaskComponent/>

      <div id='home-text'>
        <p>THIS IS A TEST</p>

      </div>
    </Container>
  );
}