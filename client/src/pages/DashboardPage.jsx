import Container from "react-bootstrap/Container";
import TaskComponent from "../components/TaskCreation";

export default function AboutPage() {
  return (
    <Container fluid className="p-5" id="dashboard-page">
      <div className="">
        <h2>DASHBOARD</h2>
      </div>
      <TaskComponent/>

      <div id='dashboard-text'>
   

      </div>
    </Container>
  );
}