import React from 'react';
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getBooksQuery = gql`
    {
        books{
            title
            id
        }
    }
`

class BookList extends React.Component {
 
  render() {
      console.log(this.props)
   return (
    <p>BookList</p>
)
}
}

export default graphql(getBooksQuery)(BookList)