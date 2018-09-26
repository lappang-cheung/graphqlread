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

// Add books
const addBookMutation = gql`
    mutation AddBook($title: String!, $genre: String!, $description: String!, $authorId: ID!){
        addBook(title: $title, genre: $genre, description: $description, authorId: $authorId){
            id
            title
            description
            genre
        }
    }
`

// Export the methods
export { getBooksQuery, getAuthorsQuery, addBookMutation }