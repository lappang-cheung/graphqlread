import { gql } from 'apollo-boost'

// Get all books
const getBooksQuery = gql`
    {
        books{
            id
            title
            description
            genre
        }
    }
`

// Get all authors
const getAuthorsQuery = gql `
    {
        authors{
            id
            name
            age
        }
    }
`

// Export the methods
export { getBooksQuery, getAuthorsQuery }