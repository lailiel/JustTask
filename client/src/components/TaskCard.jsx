import { Container, Card, Col, Row } from "react-bootstrap/";

export default function TaskComponent() {
  return (
    <Row className="g-5">
        <Col >
          <Card id="task-card" style={{ height: "100%" }}>
            <Card.Title className="task-card-title">
              <a id="task-card-a" >
                Task Name
              </a>
            </Card.Title>
            <Card.Text id="task-card-text" className="my-1">
              Task Desciprtion
            </Card.Text>
          </Card>
        </Col>



      {/* {tasks.map((tasks) => (
        <Col key={task.id}>
          <Card id="task-card" style={{ height: "100%" }}>
            <Card.Title className="task-card-title">
              <a id="task-card-a" href={task.link}>
                {task.name}
              </a>
            </Card.Title>
            <Card.Text id="task-card-text" className="my-1">
              {task.description}
            </Card.Text>
          </Card>
        </Col>
      ))} */}
    </Row>
  );
}
