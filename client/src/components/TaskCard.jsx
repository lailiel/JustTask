import { Card, Button, Form, Dropdown, DropdownButton, InputGroup } from "react-bootstrap/";
import { useState } from "react";





// --------------------
// TODO

// --add error message for submit on click for if complete = 'select'
// --conditional rendering of group name
// --auth stuff

// --------------------

const TaskCards = ({tasks}) => {

  const [completeToggle, setCompleteToggle] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("Select");

  const toggleComplete = () => {
    setCompleteToggle(!completeToggle);
    setSelectedOption("Select");
    setErrorMessage("")
  };

   const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Card className="task-creation p-4" id="task-creation">
      <Card.Title id="login-card-title">{tasks.taskName}</Card.Title>
      <p>Current Status : {tasks.state}</p>
            {tasks.due && (
            <p>Complete By : {tasks.dueDate}</p>
            )}
      
            {/* {group && (
            <p>Group : group </p>
            )} */}
            {tasks.assigned && (
            <p>Assigned To : {tasks.assignedTo} </p>
            )}
            {tasks.dollarValue && (
            <p>Value : {tasks.dollarAmount} </p>
            )}
            {tasks.pointValue && (
            <p>Points : {tasks.pointAmount} Pts</p>
            )}
      <Card.Text>{tasks.description}</Card.Text>

      <div>
        <InputGroup className="">
          <Button onClick={() => toggleComplete(true)}>Complete</Button>
          {completeToggle && (
            <DropdownButton
              variant="outline-secondary"
              title={selectedOption}
              id="input-group-dropdown-1"
            >
              <Dropdown.Item onClick={() => handleOptionSelect("Complete")}>Complete</Dropdown.Item>
              <Dropdown.Item onClick={() => handleOptionSelect("In Progress")}>In Progress</Dropdown.Item>
              <Dropdown.Item onClick={() => handleOptionSelect("Pending")}>Pending</Dropdown.Item>
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
                // onChange={handleInputChange}
              />
            </InputGroup>
            <Button onClick={() => setErrorMessage("coming soon")}>
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
