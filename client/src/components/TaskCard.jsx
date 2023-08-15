import { Card, Button, Form, Dropdown, DropdownButton, InputGroup } from "react-bootstrap/";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";



// --------------------
// TODO

// --add error message for submit on click for if complete = 'select'
// --conditional rendering of group name
// --auth stuff

// --------------------

const TaskCards = () => {

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
      <Card.Title id="login-card-title">Task</Card.Title>
      {/* {completeBy && (
            <p>Complete by : DATE</p>
            )}
            {points && (
            <p>Points Here</p>
            )}
            {score && (
            <p>Score Here</p>
            )} */}
      <Card.Text>Task Description</Card.Text>

      <div>
        <InputGroup className="mb-3">
          <Button onClick={() => toggleComplete(true)}>Complete</Button>
          {completeToggle && (
            <DropdownButton
              variant="outline-secondary"
              title={selectedOption}
              id="input-group-dropdown-1"
            >
              <Dropdown.Item onClick={() => [handleOptionSelect("Complete"),toggleComment(true)]}>Complete</Dropdown.Item>
              <Dropdown.Item onClick={() => [handleOptionSelect("In Progress"),toggleComment(true)]}>In Progress</Dropdown.Item>
              <Dropdown.Item onClick={() => [handleOptionSelect("Pending"),toggleComment(true)]}>Pending</Dropdown.Item>
            </DropdownButton>
          )}
        </InputGroup>

        {completeToggle && (
          <div>
            <Form.Label id="form-label">Task Description:</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Task Description"
                as="textarea"
                aria-label="Task Description"
                name="task-description"
                id="form-control"
                aria-describedby="basic-addon2"
                // onBlur={handleBlur}
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
