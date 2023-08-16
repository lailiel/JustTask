import React from 'react'
import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Nav from './components/nav'
import routes from './main'
import Container from 'react-bootstrap/Container'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client'

import { onError } from '@apollo/client/link/error'

const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) =>
    alert(`graphql error ${message}`))
  }
});

const link = from([
  errorLink, 
  new HttpLink({uri: "http://localhost:3001/graphql"}),
])

const client = new ApolloClient({
  cache: new InMemoryCache,
  link: link 
})


function App() {

  const location = useLocation()
  const currentOutlet = <Outlet/>
  const { nodeRef } =
  routes.find((route) => route.path === Location.pathname) ?? {}

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  )
}

export default App;