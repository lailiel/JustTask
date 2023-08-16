import Container from "react-bootstrap/Container";
import TaskCards from '../components/TaskCard'
import { useQuery} from '@apollo/client'
import { QUERY_ALL_TASKS } from '../components/graphql/queries'

export default function GroupPage() {

  const { loading, data } = useQuery(QUERY_ALL_TASKS);
  const tasks = data?.tasks || [];


  return (
    <Container fluid className="p-5" id="group-page">
      <div className="">
        <h2>GROUP PAGE - GroupName from DB- </h2>
      </div>
      <div>
      {loading ? (
            <div>Loading...</div>
          ) : (
            <TaskCards
             tasks={tasks}
            />
          )}
          </div>
    </Container>
  );
}