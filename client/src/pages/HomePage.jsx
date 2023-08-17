import Container from "react-bootstrap/Container";
import TaskComponent from '../components/TaskCreation'

export default function HomePage() {
  return (
    <Container fluid className="p-5" id="homepage">
      <div className="">
        <h2>HOMEPAGE</h2>
      </div>
      <div id='home-text'>
        <p>The To Do List of the Modern Household</p>
        <p>Your solution to chore and task management!</p>
      </div>
    </Container>
  );
}