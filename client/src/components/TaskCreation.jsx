import { Container, Card, Button, Form, Dropdown, DropdownButton, InputGroup} from "react-bootstrap/";
import DatePicker from 'react-datepicker'
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';


const TaskComponent = () => {

  const [ assignToggle, setAssignToggle] = useState(false);
  const [ dollarToggle, setDollarToggle] = useState(false);
  const [ scoreToggle, setScoreToggle] = useState(false);

  // const [ errorMessage, setErrorMessage ]= useState('')

  const toggleAssign = () => {
    setAssignToggle(!assignToggle);
  };

  const toggleDollar = () => {
    setDollarToggle(!dollarToggle);
  };

  const toggleScore = () => {
    setScoreToggle(!scoreToggle);
  };


  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };



  return (
    <Card className="task-creation p-4" id="task-creation">
    <Card.Title id="login-card-title">New Task</Card.Title>
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
          <InputGroup.Text className="input-group-text">Select Date</InputGroup.Text>
          <DatePicker
            id="date-picker"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            className="form-control"
          />
      </InputGroup>


{/* fix the onclick event to keep the name chosen */}

      <Form.Label id="form-label">Assign:</Form.Label>
      <InputGroup className="mb-3">
        <Button onClick={() => toggleAssign(true)}>+</Button>
        {assignToggle && (
          <DropdownButton
          variant="outline-secondary"
          title="Assign To"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Sarah</Dropdown.Item>
          <Dropdown.Item href="#">Richard</Dropdown.Item>
          <Dropdown.Item href="#">Your Mom</Dropdown.Item>
          <Dropdown.Item href="#">Dex</Dropdown.Item>
        </DropdownButton>
        )}
      </InputGroup>

      <Form.Label id="form-label">Dollar Value:</Form.Label>
      <InputGroup className="mb-3">
        <Button onClick={() => toggleDollar(true)}>+</Button>
        {dollarToggle && (
           <InputGroup className="mb-3">
           <InputGroup.Text className="input-group-text">$</InputGroup.Text>
           <Form.Control aria-label="0" />
          </InputGroup>
        )}
      </InputGroup>

      <Form.Label id="form-label">Score:</Form.Label>
      <InputGroup className="mb-3">
        <Button onClick={() => toggleScore(true)}>+</Button>
        {scoreToggle && (
           <InputGroup className="mb-3">
           <Form.Control aria-label="0" />
           <InputGroup.Text className="input-group-text">Pts</InputGroup.Text>
         </InputGroup>
        )}
      </InputGroup>

    </div>
    <div>
      
    </div>
     <Button>SUBMIT</Button>
    {/* <Button onClick={() => setErrorMessage("coming soon")}>SUBMIT</Button> */}
    {/* <div>
      {errorMessage}
    </div> */}
  </Card>
  );
}


export default TaskComponent