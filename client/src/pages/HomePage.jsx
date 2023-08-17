import Container from "react-bootstrap/Container";
import TaskComponent from '../components/TaskCreation'

export default function HomePage() {
  return (
    <Container fluid className="p-5" id="homepage">
      <div className="">
        <h2>HOMEPAGE</h2>
      </div>
      <div id='home-text'>
        <p>THIS IS A PRETTY COOL APP</p>
        <p>IT HELPS YOU GET STUFF DONE!</p>
        <p>WITHOUT SLAPPING YOUR ROOMMATES,</p>
        <p>YOUR SPOUSE, OR YOUR CHILDREN</p>
        <p>JUST KIDDING....</p>
        <p>SORT OF</p>
      </div>
    </Container>
  );
}