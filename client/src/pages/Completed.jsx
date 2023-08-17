import { Container, Button } from "react-bootstrap/";
import TaskCards from "../components/TaskCard";
import { useState } from 'react'
import { useQuery} from '@apollo/client'
import { QUERY_ALL_TASKS } from '../components/graphql/queries'
// import { QUERY_NONCOMPLETE_TASKS } from '../components/graphql/queries'


export default function CompletedPage() {

  // const { data } = useQuery(QUERY_NONCOMPLETE_TASKS);
  const { data } = useQuery(QUERY_ALL_TASKS);
  const tasks = data?.tasks || [];



  const completedTasks = tasks.filter(task => task.state === "completed")

  const dollars = completedTasks.reduce((total, task) => total + task.dollarAmount, 0);
  const score = completedTasks.reduce((total, task) => total + task.pointAmount, 0);

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
        <h2>COMPLETED TASKS</h2>
        {/* <Button onClick={handleCompletedButton}> COMPLETED TASKS</Button>
        <Button onClick={handleToDoButton}> TO DO</Button> */}
      </div>
        {dollars !== 0 && (
        <p>Money Earned: ${dollars}</p>
        )}
        {score !== 0 && (
        <p>Points Earned: {score} Pts</p>
        )}
      <div>
      {!tasks ? (
            <div>You all caught up!</div>
          ) : (
            completedTasks.map(tasks => (
            <TaskCards
              key={tasks.id}
              tasks={tasks}
             />))
           
          )}
          </div>
    </Container>
  );
}