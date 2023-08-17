import React from 'react'
import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Nav from './components/nav'
import routes from './main'
import Container from 'react-bootstrap/Container'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) =>
    alert(`graphql error ${message}`))
  }
});


const link = from([
  errorLink, 
  authLink.concat(httpLink),
]);



const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});


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