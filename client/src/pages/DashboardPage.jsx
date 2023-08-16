import Container from "react-bootstrap/Container";
import TaskCards from "../components/TaskCard";

export default function AboutPage() {

  

  return (
    <Container fluid className="p-5" id="dashboard-page">
      <div className="">
        <h2>DASHBOARD</h2>
      </div>
      <TaskCards/>

      <div id='dashboard-text'>
   

      </div>
    </Container>
  );
}