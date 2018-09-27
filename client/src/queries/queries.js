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
// Get book detail
const getBookQuery = gql `
    query($id: ID){
        book(id: $id){
            id
            title
            description
            genre
            author{
                id
                name
                age
                books{
                    title
                    id
                }
            }
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
export { getBooksQuery, getBookQuery, getAuthorsQuery, addBookMutation }