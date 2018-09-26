import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

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

class BookList extends Component {

    displayBooks(){
        const data = this.props.data
        if(data.loading){
            return <div>Loading...</div>
        }else{
            return data.books.map(book => {
                return <li key={book.id}>{book.title}</li>
            })
        }
    }

    render() {
        return (
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList)