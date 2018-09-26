const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql

const Author = require('../../models/author')
const Book = require('../../models/book')

const AuthorType = require('../types/author_type')
const BookType = require('../types/book_type')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID}},
            resolve(parentValue, args){
                return Author.findById(args.id)
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parentValue, args){
                return Author.find({})
            }
        },
        book: {
            type: BookType,
            args: { id: { type: GraphQLID }},
            resolve(parentValue, args){
                return Book.findById(args.id)
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parentValue, args){
                return Book.find({})
            }
        }
    }
})

module.exports = RootQuery