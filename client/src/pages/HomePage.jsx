import Container from "react-bootstrap/Container";
import TaskComponent from '../components/TaskCreation'

export default function HomePage() {
  return (
    <Container fluid className="p-5" id="homepage">
      <div className="">
        <h2>HOMEPAGE</h2>
      </div>
      <div id='home-text'>
<<<<<<< HEAD
        <p>THIS IS A PRETTY COOL APP</p>
        <p>IT HELPS YOU GET STUFF DONE!</p>
        <p>WITHOUT SLAPPING YOUR ROOMMATES,</p>
        <p>YOUR SPOUSE, OR YOUR CHILDREN</p>
        <p>JUST KIDDING....</p>
=======
        <p>Discover the modern way to manage household responsibilities.</p>
        <p>JustTask simplifies the age-old chore chart, bringing families and housemates together in a seamless, collaborative platform.</p>
        <p>Assign tasks, track progress, and reward diligence, all in one place.</p>
        <p>No more disputes, forgotten duties, or chaotic schedules. Just tasks, made simple and fun.</p>
        <p>Start today and revolutionize how you manage chores!</p>
>>>>>>> 562cf25e3866f91643842828dfab6558f6810443
      </div>
    </Container>
  );
}