import { gql } from 'apollo-boost'

const getBooksQuery = gql`
    {
        books{
            title
            id
        }
    }
`

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`

export { getAuthorsQuery, getBooksQuery }