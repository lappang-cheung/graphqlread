const graphql = require('graphql')

const Author = require('../../models/author')
const AuthorType = require('../types/author_type')

const {
    GraphQLID,
    GraphQLString,
    GraphQLObjectType
} = graphql

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

module.exports = BookType