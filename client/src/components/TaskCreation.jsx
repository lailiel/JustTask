import { Card, Button, Form, Dropdown, DropdownButton, InputGroup} from "react-bootstrap/";
import DatePicker from 'react-datepicker'
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';



// --------------------
// TODO

// --verify dollar/score inputs are numbers
// --auth stuff

// --------------------


const TaskCreation = () => {

  const [ dateToggle, setDateToggle] = useState(false);
  const [ assignToggle, setAssignToggle] = useState(false);
  const [ dollarToggle, setDollarToggle] = useState(false);
  const [ scoreToggle, setScoreToggle] = useState(false);
  const [ errorMessage, setErrorMessage ]= useState('')

  const toggleDate = () => {
    setDateToggle(!dateToggle);
  };

  const toggleAssign = () => {
    setAssignToggle(!assignToggle);
  };

  const toggleDollar = () => {
    setDollarToggle(!dollarToggle);
  };

  const toggleScore = () => {
    setScoreToggle(!scoreToggle);
  };


  const [selectedUser, setSelectedUser] = useState("Assign To");
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };


  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Card className="task-creation p-4" id="task-creation">
     <div>
      <Form.Label id="form-label">Task:</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Task"
          aria-label="Task"
          name="task"
          id="form-control"
          aria-describedby="basic-addon2"
          // onBlur={handleBlur}
          // onChange={handleInputChange}
        />
      </InputGroup>

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
      
      <Form.Label id="form-label">Complete By:</Form.Label>
      <InputGroup className="mb-3">
        <Button onClick={() => toggleDate(true)}>Select Date</Button>
        
          {dateToggle && (
            <DatePicker
            id="date-picker"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            className="form-control"
            />
          )}
         
      </InputGroup>

      <Form.Label id="form-label">Assign:</Form.Label>
      <InputGroup className="mb-3">
        <Button onClick={() => toggleAssign(true)}>+</Button>
        {assignToggle && (
          <DropdownButton
          variant="outline-secondary"
          title={selectedUser}
          id="input-group-dropdown-1">
          <Dropdown.Item onClick={() => handleUserSelect("Sarah")}>Sarah</Dropdown.Item>
          <Dropdown.Item onClick={() => handleUserSelect("Richard")}>Richard</Dropdown.Item>
          <Dropdown.Item onClick={() => handleUserSelect("Your Mom")}>Your Mom</Dropdown.Item>
          <Dropdown.Item onClick={() => handleUserSelect("Dex")}>Dex</Dropdown.Item>
        </DropdownButton>
        )}
      </InputGroup>

      <Form.Label id="form-label">Dollar Value:</Form.Label>
      <InputGroup className="mb-3">
        <Button onClick={() => toggleDollar(true)}>+</Button>
       
        {dollarToggle && (
           <InputGroup className="mb-3">
           <InputGroup.Text className="input-group-text">$</InputGroup.Text>
           <Form.Control className="input-field" aria-label="0" />
          </InputGroup>
        )}
    
      </InputGroup>

      <Form.Label id="form-label">Score:</Form.Label>
      <InputGroup className="mb-3">
        <Button onClick={() => toggleScore(true)}>+</Button>
    
        {scoreToggle && (
           <InputGroup className="mb-3">
           <Form.Control className="input-field" aria-label="0" />
           <InputGroup.Text className="input-group-text">Pts</InputGroup.Text>
         </InputGroup>
        )}
  
      </InputGroup>

    </div>

    <Button onClick={() => setErrorMessage("coming soon")}>SUBMIT</Button>
    
    <div>
      {errorMessage}
    </div>

  </Card>
  );
}


export default TaskCreation