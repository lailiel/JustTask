import githubLogo from '../assets/github-logo.svg'
import linkedinLogo from '../assets/linkedin-tile.svg'
import Container from 'react-bootstrap/Container'

export default function FooterComponent() {

  return (
    <div className='text-center text-white' id='footer'>
      <Container className='mb-1 '>
          <a href='https://github.com/lailiel'>
           <img id='icon' src={githubLogo} className='m-3 mx-5'style={{width:'30px', height:'30px'}} ></img>
          </a>
          <a href='https://www.linkedin.com/in/abilivick/'>
          <img id='icon' src={linkedinLogo} className='m-3 mx-5'style={{width:'30px', height:'30px'}} ></img>
          </a>
      </Container>
    </div>

  );
}
