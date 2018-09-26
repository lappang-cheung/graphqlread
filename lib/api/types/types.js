const graphql = require('graphql')

const Author = require('../../models/author')
const Book = require('../../models/book')

const { 
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLList
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

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString},
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parentValue, args){
                return Author.findById(parentValue.authorId)
            }
        }
    })
})


module.exports = { AuthorType, BookType }