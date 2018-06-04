import React from 'react';
import { graphql } from 'react-apollo'

import { getBookQuery } from '../queries/queries'

class BookDetails extends React.Component {
     displayBookDetails() {
        const {book} = this.props.data
          if(book){
              return(
                  <div>
                      <h2>{book.title}</h2>
                      <p>{book.author.name} : {book.genre}</p>
                      <h3>All books by this author:</h3>
                      <ul className="other-books">
                        {book.author.books.map(item => {
                            return <li key={item.id}>{item.title}</li>
                        })}
                      </ul>
                  </div>
              )
          } else{
              return (
                  <div>Please select a book for more details...</div>
              )
          }
      }
  render() {
      console.log(this.props)
      
   return (
    <div id="book-details">
        {this.displayBookDetails()}
    </div>
)
}
}

export default graphql(getBookQuery, {
    options: (props) => {
        return{
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails)