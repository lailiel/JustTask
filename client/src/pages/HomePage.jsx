import Container from "react-bootstrap/Container";
import TaskComponent from '../components/TaskCreation'

export default function HomePage() {
  return (
    <Container fluid className="p-5" id="homepage">
      <div className="">
        <h2>HOMEPAGE</h2>
      </div>
      <div id='home-text'>
        <p>Discover the modern way to manage household responsibilities.</p>
        <p>JustTask simplifies the age-old chore chart, bringing families or housemates together in a seamless, collaborative platform.</p>
        <p>Assign tasks, track progress, and reward diligence, all in one place.</p>
        <p>No more disputes, forgotten duties, or chaotic schedules. JustTask(s), made simple and fun.</p>
        <p>Start today and revolutionize how you manage chores!</p>
      </div>
    </Container>
  );
}