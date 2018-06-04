import React, { Component, Fragment } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import BookList from './components/BookList'
import AddBook from './components/AddBook'

// Apollo Client Setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  
  render() {
    return (
      <ApolloProvider client={client}>
        <Fragment>
          <BookList />
          <AddBook />
        </Fragment>
      </ApolloProvider>
    );
  }
}

export default App
