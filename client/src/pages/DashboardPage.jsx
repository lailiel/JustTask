import Container from "react-bootstrap/Container";
import TaskCards from "../components/TaskCard";
// import { useQuery} from '@apollo/client'
// import { QUERY_USER_TASKS } from '../components/graphql/queries'

export default function DashboardPage() {

  // const { loading, data } = useQuery(QUERY_USER_TASKS);
  // const tasks = data?.tasks || [];

  return (
    <Container fluid className="p-5" id="dashboard-page">
      <div className="">
        <h2>DASHBOARD</h2>
      </div>
      {/* <div>
      {loading ? (
            <div>Loading...</div>
          ) : (
            <TaskCards
             tasks={tasks}
            />
          )}
          </div> */}
    </Container>
  );
}