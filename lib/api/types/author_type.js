const graphql = require('graphql')

const Book = require('../../models/book')
const BookType = require('../types/book_type')
const { 
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType
    ,GraphQLList
} = graphql

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: GraphQLList(BookType),
            resolve(parentValue, args){
                return Book.find({ authorId: parentValue.id })
            }
        }
    })
})

module.exports = AuthorType