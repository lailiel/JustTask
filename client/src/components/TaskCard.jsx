
import { Container, Card, Col, Row } from 'react-bootstrap/'

export default function FooterComponent() {

    return (
    <Row xs={1} sm={2} md={2} lg={3} className="g-5">
        {projects.map(project => (
        <Col key={project.id}>
        <Card id='project-card' style={{height:'100%', aspectRatio: "3x2"}}  >
            <Card.Img id='card-image' style={{height:'100%', objectFit: 'cover'}} src={project.image} alt='Project Image' />
            <Card.ImgOverlay id='card-overlay' className='p-4'>
                <Card.Title className='project-card-title'>
                    <a id='project-card-a'href={project.link}>
                        {project.name}
                    </a>
                </Card.Title>
                <Card.Text id='project-card-text' className='my-1'>
                    {project.skillsUsed}
                </Card.Text>
                <a href={project.gitLink} id='project-card-github' >
                        <Card.Img  className='justify-content-flex-end'
                            style={{width:'1.1em', height:'1.1em'}} 
                            src={githubLogo} atl="Github Logo">
                        </Card.Img>
                    </a>
            </Card.ImgOverlay>
   
        </Card>
        </Col>
        ))}
        
    </Row>
        );     
    }
