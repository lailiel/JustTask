import React from 'react'
import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Nav from './components/nav'
// import Footer from './components/'
import routes from './main'
import Container from 'react-bootstrap/Container'

function App() {

  const location = useLocation()
  const currentOutlet = <Outlet/>
  const { nodeRef } =
  routes.find((route) => route.path === Location.pathname) ?? {}

  return (
    <>
      <Nav/>
      <Container>
        <TransitionGroup>
          <CSSTransition
            in={true}
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={600}
            classNames="page"
            unmountOnExit
            >
              {(state) => (
                <div ref={nodeRef} className="page">
                  {currentOutlet}
                </div>
              )}
          </CSSTransition>
        </TransitionGroup>
      </Container>
      {/* <Footer/> */}
    </>
  )
}

export default App;