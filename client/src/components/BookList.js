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
 
 displayBooks (){
     let data = this.props.data
     if(data.loading){
         return( <div>Loading books...</div> )
     } else {
         return data.books.map(book =>{
             return (
                 <li key={ book.id }>{book.title}</li>
             )
         })
     }
 }

  render() {
    //   console.log(this.props)
   return (
    <div>
        { this.displayBooks() }
    </div>
)
}
}

export default graphql(getBooksQuery)(BookList)