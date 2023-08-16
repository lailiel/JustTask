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
            <p>Complete By : DATE</p>
            )}
            {group && (
            <p>Group : group </p>
            )}
            {assigned && (
            <p>Assigned To : user </p>
            )}
            {status && (
            <p>Current Status : or badge</p>
            )}
            {dollar && (
            <p>Value : $$ </p>
            )}
            {points && (
            <p>Points : 00 Pts</p>
            )} */}
      <Card.Text>Task Description</Card.Text>

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
