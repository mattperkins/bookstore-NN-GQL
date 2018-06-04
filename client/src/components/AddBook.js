import React from 'react';
import { graphql, compose } from 'react-apollo'

import { getAuthorsQuery, addBookMutation } from '../queries/queries'

class AddBook extends React.Component {
 
 constructor(props) {
 super(props)
    this.state = {
        title: '',
        genre: '',
        authorId: ''
    }
 }


displayAuthors(){
    let data = this.props.getAuthorsQueryFromDataObject
    if(data.loading){
      return ( 
        <option disabled>Loading Authors...</option> 
      )
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>{ author.name }</option>
        )
      })
    }
  }

  submitForm = e => {
      e.preventDefault()
      console.log(this.state)
      console.log(this.props)
      this.props.addBookMutationOnSubmit({
          variables:{
              title: this.state.title,
              genre: this.state.genre,
              authorId: this.state.authorId
          }
      })
  }

  render() {
    //   console.log(this.props)
   return (
   <form id="add-book" onSubmit={ this.submitForm }>

        <div className="field">
            <label>Book Name:</label>
            <input type="text" onChange={ e => this.setState({ title: e.target.value })} />
        </div>

        <div className="field">
            <label>Genre:</label>
            <input type="text" onChange={ e => this.setState({ genre: e.target.value })} />
        </div>

        <div className="field">
            <label>Author:</label>
            <select onChange={ e => this.setState({ authorId: e.target.value })}>
                <option>Select Author</option>
                { this.displayAuthors() }
            </select>
        </div>

        <button>+</button>
   </form>
)
}
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQueryFromDataObject" }),
    graphql(addBookMutation, { name: "addBookMutationOnSubmit" })
)(AddBook)