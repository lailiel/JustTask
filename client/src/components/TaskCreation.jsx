import { Row, Col, Card, Button, Form, Dropdown, DropdownButton, InputGroup} from "react-bootstrap/";
import DatePicker from 'react-datepicker'
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import { useMutation } from '@apollo/client';
import { CREATE_TASK} from '../components/graphql/mutations';
import { useQuery } from '@apollo/client';
// import { QUERY_GROUP_MEMBERS } from '../components/graphql/queries'
import { QUERY_ALL_USERS } from '../components/graphql/queries'


// --------------------
// TODO

// --auth stuff
// --get date select window to populate ontop of elements further down on page
// --connect drop down assign list to group members

// --------------------


const TaskCreation = () => {

  const [errorMessage, setErrorMessage ]= useState('');

  const { data } = useQuery(QUERY_ALL_USERS);
  const users = data?.name || [] ;
  

  // ---------------------------------------------------------------
  const [createTask, {error}] = useMutation(CREATE_TASK)

  const [ taskName, setTaskName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ dollarValue, setDollarValue ] = useState(null);
  const [ scoreValue, setScoreValue ] = useState(null);

  const addTask = () => {
    createTask( {variables: 
      {
        taskName: taskName,
        description: description,
        due: toggleState.assignToggle,
        dueDate: selectedDate,
        assigned: false,
        assignedTo: {id: "64dd6dd28615a74582ed75bc" },
        repopulate: toggleState.repeatToggle,
        repopulateValue: repeatValue,
        dollarValue:  toggleState.dollarToggle,
        dollarAmount: dollarValue,
        pointValue: toggleState.scoreToggle,
        pointAmount: scoreValue,
        state: "incomplete",
        comment: "",
      }
    })
    if (error){
      console.log(error)
    }
    window.location.assign('/group');
  }


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
  };

  const toggleAssign = () => {
    setToggleState({ ...toggleState, assignToggle: !toggleState.assignToggle});
    setSelectedUser("Assign To")
    console.log(users)
  };

  const toggleDollar = () => {
    setToggleState({ ...toggleState, dollarToggle: !toggleState.dollarToggle});
   };

  const toggleScore = () => {
    setToggleState({ ...toggleState, scoreToggle: !toggleState.scoreToggle});
  };

  // ---------------------------------------------------------------

  const [selectedUser, setSelectedUser] = useState("Assign To");
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const [selectedRepeat, setSelectedRepeat] = useState("Select");
  const [ repeatValueInput, setRepeatValueInput ] = useState(null)
  const [ repeatValue, setRepeatValue ] = useState(null)
  const handleRepeatSelect = (time) => {
    setSelectedRepeat(time);
    if(selectedRepeat === 'Months') {
      setRepeatValue(repeatValueInput * 30)
    } else if (selectedRepeat === 'Weeks'){
      setRepeatValue(repeatValueInput * 7)
    } else {
      setRepeatValue(repeatValueInput)
    }
  };


  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // ---------------------------------------------------------------

  

  const handleKeyPress = (event) => {
    const keyCode = event.which || event.keyCode;
    const isValidKey = (keyCode >= 48 && keyCode <= 57) || keyCode === 8 || keyCode === 46;
    if (!isValidKey) {
      event.preventDefault();
    }
  };


  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType ==='task'){
      setTaskName(inputValue)
    } else if (inputType === 'task-description') {
      setDescription(inputValue)
    }else if(inputType === 'repeatValueField') {
      setRepeatValueInput(inputValue)
    } else if (inputType === 'dollarValueField') {
      setDollarValue(inputValue);
    } else {
      setScoreValue(inputValue);
    }
  };

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
          className="form-control"
          aria-describedby="basic-addon2"
          onChange={handleInputChange}
        />
      </InputGroup>

      <Form.Label id="form-label">Task Description:</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Task Description"
          as="textarea"
          aria-label="Task Description"
          name="task-description"
          className="form-control"
          aria-describedby="basic-addon2"
          onChange={handleInputChange}
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
              className="input-field" 
              aria-label="0" 
              onChange={handleInputChange}
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
              {users.map(user => (
                <Dropdown.Item onClick={() => handleUserSelect(user)}>{user}</Dropdown.Item>
              ))}
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
            name="dollarValueField"
            className="input-field" 
            aria-label="0" 
            onChange={handleInputChange}
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
            name="scoreValueField"
            className="input-field"
            aria-label="0" 
            onChange={handleInputChange}
            />
           <InputGroup.Text className="input-group-text">Pts</InputGroup.Text>
         </>
        )}
  
      </InputGroup>
      </Col>
      </Row>
    </div>

    <Button onClick={addTask}>SUBMIT</Button>
    
    <div>
      {errorMessage}
    </div>

  </Card>
  );
}


export default TaskCreation