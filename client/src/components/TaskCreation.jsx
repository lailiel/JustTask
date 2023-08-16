import { Row, Col, Card, Button, Form, Dropdown, DropdownButton, InputGroup} from "react-bootstrap/";
import DatePicker from 'react-datepicker'
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';



// --------------------
// TODO

// --verify dollar/score inputs are numbers
// --auth stuff

// --------------------


const TaskCreation = () => {

  const [errorMessage, setErrorMessage ]= useState('');

  // ---------------------------------------------------------------

  const [ toggleState, setToggleState] = useState({
  dateToggle: false,
  repeatToggle: false,
  assignToggle: false,
  dollarToggle: false,
  scoreToggle: false,
  })

  const toggleDate = () => {
    setToggleState({ ...toggleState, dateToggle: !toggleState.dateToggle});
    setSelectedDate(null)
  };

  const toggleRepeat = () => {
    setToggleState({ ...toggleState, repeatToggle: !toggleState.repeatToggle});
    setSelectedRepeat("Select")
    // setInputValue({...inputValue, scoreValue: null})
  };

  const toggleAssign = () => {
    setToggleState({ ...toggleState, assignToggle: !toggleState.assignToggle});
    setSelectedUser("Assign To")
  };

  const toggleDollar = () => {
    setToggleState({ ...toggleState, dollarToggle: !toggleState.dollarToggle});
    // setInputValue({...inputValue, dollarValue: null})
   };

  const toggleScore = () => {
    setToggleState({ ...toggleState, scoreToggle: !toggleState.scoreToggle});
    // setInputValue({...inputValue, scoreValue: null})
  };

  // ---------------------------------------------------------------

  const [selectedUser, setSelectedUser] = useState("Assign To");
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const [selectedRepeat, setSelectedRepeat] = useState("Select");
  const handleRepeatSelect = (time) => {
    setSelectedRepeat(time);
  };


  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // ---------------------------------------------------------------

  // const [inputValue, setInputValue] = useState({
  //   repeatValue: "",
  //   dollarValue: "",
  //   scoreValue: "",
  //   })

  const handleKeyPress = (event) => {
    const keyCode = event.which || event.keyCode;
    const isValidKey = (keyCode >= 48 && keyCode <= 57) || keyCode === 8 || keyCode === 46;
    if (!isValidKey) {
      event.preventDefault();
    }
  };


  // const handleInputChange = (name, value) => {
  //   if (name === 'repeatValueField') {
  //     setInputValue({...inputValue, repeatValue: value })
  //   } else if (name === 'dollarValueField') {
  //     setInputValue({...inputValue, dollarValue: value });
  //   } else {
  //     setInputValue({...inputValue, scoreValue: value });
  //   }
  // };

  // ---------------------------------------------------------------

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
          // onChange={handleInputChange}
        />
      </InputGroup>

      <Row xs={1} sm={1} md={2} lg={2}>
        <Col>
        <Form.Label id="form-label">Complete By:</Form.Label>
        <InputGroup className="mb-3 date-select">
          <>
          <Button onClick={() => toggleDate(true)}>Select Date</Button>
          {toggleState.dateToggle && (
             <DatePicker
              id="date-picker"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              className="form-control"
            />
          )}
          </>
        </InputGroup>
        </Col>

        <Col>
        <Form.Label id="form-label">Repeat:</Form.Label>
        <InputGroup className="mb-3">
          <Button onClick={() => toggleRepeat(true)}>+</Button>
          {toggleState.repeatToggle && (
          <>
            <DropdownButton
              variant="outline-secondary"
              title={selectedRepeat}
              id="input-group-dropdown-1">
              <Dropdown.Item onClick={() => handleRepeatSelect("Days")}>Days</Dropdown.Item>
              <Dropdown.Item onClick={() => handleRepeatSelect("Weeks")}>Weeks</Dropdown.Item>
              <Dropdown.Item onClick={() => handleRepeatSelect("Months")}>Months</Dropdown.Item>
            </DropdownButton>
            <Form.Control 
              type="text"
              onKeyPress={handleKeyPress}
              name="repeatValueField"
              // value={inputValue.repeatValue}
              className="input-field" 
              aria-label="0" 
              // onChange={handleInputChange}
              />
          </>
          )}
        </InputGroup>
        </Col>
      </Row>
            
      <Row  xs={1} sm={2} md={3} lg={3}>
        <Col>
      <Form.Label id="form-label">Assign:</Form.Label>
      <InputGroup className="mb-3" id="date-picker-group">
        <Button onClick={() => toggleAssign(true)}>+</Button>
        {toggleState.assignToggle && (
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
      </Col>

      <Col>
      <Form.Label id="form-label">Dollar Value:</Form.Label>
      <InputGroup className="mb-3">
        <Button onClick={() => toggleDollar(true)}>+</Button>
        {toggleState.dollarToggle && (
          <>
           <InputGroup.Text className="input-group-text">$</InputGroup.Text>
           <Form.Control 
            type="text"
            onKeyPress={handleKeyPress}
            // value={inputValue.dollarValue}
            name="dollarValueField"
            className="input-field" 
            aria-label="0" 
            // onChange={handleInputChange}
            />
          </>
        )}
      </InputGroup>
      </Col>

      <Col>
      <Form.Label id="form-label">Score:</Form.Label>
      <InputGroup className="mb-3">
        <Button onClick={() => toggleScore(true)}>+</Button>
        {toggleState.scoreToggle && (
           <>
           <Form.Control 
            type="text"
            onKeyPress={handleKeyPress}
            // value={inputValue.scoreValue}
            name="scoreValueField"
            className="input-field"
            aria-label="0" 
            // onChange={handleInputChange}
            />
           <InputGroup.Text className="input-group-text">Pts</InputGroup.Text>
         </>
        )}
  
      </InputGroup>
      </Col>
      </Row>
    </div>

    <Button onClick={() => setErrorMessage("coming soon")}>SUBMIT</Button>
    
    <div>
      {errorMessage}
    </div>

  </Card>
  );
}


export default TaskCreation