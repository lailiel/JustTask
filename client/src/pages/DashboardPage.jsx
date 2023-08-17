import { Container, Button } from "react-bootstrap/";
import TaskCards from "../components/TaskCard";
import { useState } from 'react'
import { useQuery} from '@apollo/client'
import { QUERY_ALL_TASKS } from '../components/graphql/queries'
// import { QUERY_NONCOMPLETE_TASKS } from '../components/graphql/queries'


export default function DashboardPage() {

  // const { data } = useQuery(QUERY_NONCOMPLETE_TASKS);
  const { data } = useQuery(QUERY_ALL_TASKS);
  const tasks = data?.tasks || [];

  const noncompletedTasks = tasks.filter(task => task.state !== "completed")


  // const [ filter, setFilter] = useState("completed")

  // const completedTasks = tasks.filter(task => task.state === "completed")
 
  // const handleCompletedButton = () => {
  //   setFilter(completedTasks);
  // };

  // const handleToDoButton = () => {
  //   setFilter(noncompletedTasks);
  // };
  
  

  return (
    <Container fluid className="p-5" id="dashboard-page">
      <div className="">
        <h2>DASHBOARD</h2>
        {/* <Button onClick={handleCompletedButton}> COMPLETED TASKS</Button>
        <Button onClick={handleToDoButton}> TO DO</Button> */}
      </div>
      <div>
      {!tasks ? (
            <div>You all caught up!</div>
          ) : (
            noncompletedTasks.map(tasks => (
            <TaskCards
              key={tasks.id}
              tasks={tasks}
             />))
           
          )}
          </div>
    </Container>
  );
}