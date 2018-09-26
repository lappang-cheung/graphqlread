import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'


import { getAuthorsQuery, addBookMutation } from '../queries/queries'

class AddBook extends Component {

    state = {
        title: '',
        genre: '',
        description: '',
        authorId: ''
    }

    displayAuthors(){
        var data = this.props.getAuthorsQuery
        if(data.loading){
            return <option disabled>Loading Authors...</option>
        }else{
            return data.authors.map(author => {
                return <option key={author.id} value={author.id} >{author.name}</option>
            })
        }
    }

    submitForm = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.addBookMutation({
            variables: {
                title: this.state.title,
                description: this.state.description,
                genre: this.state.genre,
                authorId: this.state.authorId
            }
        })
    }

    render() {
        return (
            <form id="add-book" onSubmit={this.submitForm}>
                <div className="field">
                    <label>Book name:</label>
                    <input 
                        type="text" 
                        onChange={(event) => this.setState({
                            title: event.target.value
                        })}
                    />
                </div>
                <div className="field">
                    <label>Description:</label>
                    <input 
                        type="textArea" 
                        onChange={(event) => this.setState({
                            description: event.target.value
                        })}
                    />
                </div>
                <div className="field">
                    <label>Genre</label>
                    <input 
                        type="text" 
                        onChange={(event) => this.setState({
                            genre: event.target.value
                        })}
                    />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select
                        onChange={(event) => this.setState({
                            authorId: event.target.value
                        })}
                    >
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>
        )
    }
}

export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook)