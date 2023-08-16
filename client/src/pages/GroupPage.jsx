import Container from "react-bootstrap/Container";
import TaskCards from '../components/TaskCard'

export default function AboutPage() {
  return (
    <Container fluid className="p-5" id="group-page">
      <div className="">
        <h2>GROUP PAGE - GroupName from DB- </h2>
      </div>
      <TaskCards/>
    </Container>
  );
}