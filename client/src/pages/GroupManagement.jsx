import Container from "react-bootstrap/Container";
import TaskCards from '../components/TaskCard'
import { useQuery} from '@apollo/client'
import { QUERY_ALL_TASKS } from '../components/graphql/queries'


export default function GroupPage() {

  const { data } = useQuery(QUERY_ALL_TASKS);
  const tasks = data?.tasks || [];

  return (
    <Container fluid className="p-5" id="group-page">
      <div className="">
        <h2> GROUP TASKS{name} </h2>
      </div>
      <div>
      {!tasks ? (
            <div>You all caught up!</div>
          ) : (
            tasks.slice(0,10).map(tasks => (
            <TaskCards
              key={tasks.id}
              tasks={tasks}
             />))
           
          )}
          </div>
    </Container>
  );
}