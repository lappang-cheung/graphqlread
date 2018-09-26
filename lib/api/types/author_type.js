const graphql = require('graphql')

const { 
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType
} = graphql

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
})

module.exports = AuthorType