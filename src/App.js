import React from 'react'
import Home from './Home'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

const App = () => {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql-weather-api.herokuapp.com'
  })


  return (
    <div>
      <h1>APP CREATED ONLY FOR LEARNING HOW TO WORK WITH APOLLO CLIENT & GRAPHQL</h1>
      <ApolloProvider client={client}>
      <Home />
      </ApolloProvider>
    </div>
  )
}

export default App
