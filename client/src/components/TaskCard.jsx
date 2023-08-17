import { Card, Button, Form, Dropdown, DropdownButton, InputGroup, Container } from "react-bootstrap/";
import { useState } from "react";
import { useMutation } from '@apollo/client';
import { UPDATE_TASK} from '../components/graphql/mutations'
import { formatDate } from '../components/utils/dateFormat'





// --------------------
// TODO

// --auth stuff

// --------------------

const TaskCards = ({tasks}) => {

  const [updateTask, {error}] = useMutation(UPDATE_TASK)
  const [taskComment, setTaskComment] = useState("")
  const today = new Date()
  const formattedDate = formatDate(today)


  const updateTaskStatus = (taskId) => {
    if (selectedOption === "Select") {
      setErrorMessage('Select a complete option')
    } else{
    updateTask({
      variables: {
        updateTaskStatusId: taskId,
        state: selectedOption,
        comment: taskComment,
        dateOflastCompletion: formattedDate,
        completedBy: null
      }
    })
    console.log(taskId, selectedOption, taskComment, formattedDate)
    if (error){
      console.log(error)
    } 
    window.location.reload()
  } 
  }

  const [completeToggle, setCompleteToggle] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("Select");
  const [selectedText, setSelectedText] = useState("Select");


  const toggleComplete = () => {
    setCompleteToggle(!completeToggle);
    setSelectedOption("Select");
    setErrorMessage("")
  };

   const handleOptionSelect = (option, text) => {
    setSelectedOption(option);
    setSelectedText(text)
     };

  const handleInputChange = (event) => {
    setTaskComment(event.target.value);
  };

  
 
  return (
    <Card className="task-creation p-4 mb-4" id="task-creation">
      <Card.Title id="login-card-title">{tasks.taskName}</Card.Title>
            {tasks.state !== "incomplete" && (
            <p className="m-0">Current Status : {tasks.state}</p>
            )}
            {tasks.due && (
            <p className="m-0">Complete By : {formatDate(tasks.dueDate)}</p>
            )}
            {tasks.assigned && (
            <p className="m-0">Assigned To : {tasks.assignedTo} </p>
            )}
            {tasks.description && (
          <Card.Text className="p-2 my-2 task-description">{tasks.description}</Card.Text>
            )}
           
            {tasks.dollarValue && (
            <p className="m-0">Dollar Value : ${tasks.dollarAmount} </p>
            )}
            {tasks.pointValue && (
            <p className="m-0">Points : {tasks.pointAmount} Pts</p>
            )}
            {tasks.comment && (
            <p className="m-0">Comment : {tasks.comment} </p>
            )}
            {tasks.state === "completed" && (
            <p className="m-0">Last Done : {formatDate(tasks.dateOflastCompletion)}</p>
            )}
      <div>
        <InputGroup className="mt-3">
          <Button  onClick={() => toggleComplete(true)}>Complete</Button>
          {completeToggle && (
            <DropdownButton
              variant="outline-secondary"
              title={selectedText}
              id="input-group-dropdown-1"
            >
              <Dropdown.Item onClick={() => [handleOptionSelect("completed", "Complete"), ]}>Complete</Dropdown.Item>
              <Dropdown.Item onClick={() => [handleOptionSelect("inprogress", "In Progress"), ]}>In Progress</Dropdown.Item>
              <Dropdown.Item onClick={() => [handleOptionSelect("pending", "Pending"), ]}>Pending</Dropdown.Item>
            </DropdownButton>
          )}
        </InputGroup>

        {completeToggle && (
          <div>
            <Form.Label id="form-label" className="mt-3">Comment:</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                as="textarea"
                aria-label="Comment"
                name="comment"
                id="form-control"
                aria-describedby="basic-addon2"
                onChange={handleInputChange}
              />
            </InputGroup>
            <Button onClick={() => updateTaskStatus(tasks.id)}>
              SUBMIT
            </Button>
            <div>{errorMessage}</div>
          </div>
        )}
      </div>

      <div></div>
    </Card>
  );
};

export default TaskCards;
