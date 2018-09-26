const graphql = require('graphql')
// const AuthorType = require('./author_type')

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
        genre: { type: GraphQLString }
    })
})

module.exports = BookType