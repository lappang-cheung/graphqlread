const graphql = require('graphql')
const { GraphQLObjectType, 
        GraphQLID, 
        GraphQLNonNull, 
        GraphQLString,
        GraphQLInt } = graphql

const Author = require('../../models/author')
const Book = require('../../models/book')

const {AuthorType, BookType} = require('../types/types') 

const mutation = new GraphQLObjectType({
    name: 'mutation',
    fields:{
        addAuthor :{
            type: AuthorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(parentValue, { name, age }){
                const author = new Author({
                    name,
                    age
                })

                return author.save()
            }
        },
        editAuthor: {
            type: AuthorType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID)},
                name: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve(parentValue, args){
                return Author.findOneAndUpdate(
                    { _id: args.id },
                    { $set: args },
                    { new: true }
                )
            }
        },
        deleteAuthor: {
            type: AuthorType,
            args:{
                id: { type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parentValue, args){
                return Author.findOneAndRemove(
                    { _id: args.id }
                )
            }
        },
        addBook: {
            type: BookType,
            args:{
                title: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parentValue, {title, genre, description, authorId }){
                const book = new Book({
                    title,
                    genre,
                    description,
                    authorId
                })

                return book.save()
            }
        },
        editBook: {
            type: BookType,
            args:{
                id: { type: new GraphQLNonNull(GraphQLID) },
                title: { type: GraphQLString },
                genre: { type: GraphQLString },
                description: { type: GraphQLString },
                authorId: { type: GraphQLID }
            },
            resolve(parentValue, args){
                return Book.findOneAndUpdate(
                    { _id: args.id },
                    { $set: args },
                    { new: true }
                )
            }
        },
        deleteBook: {
            type: BookType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parentValue, args){
                return Book.findOneAndRemove(
                    { _id: args.id }
                )
            }
        }
    }
})

module.exports = mutation