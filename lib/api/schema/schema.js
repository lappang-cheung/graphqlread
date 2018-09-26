const graphql = require('graphql')

const { GraphQLSchema } = graphql

const RootQuery = require('../queries/root_query')
const Mutation = require('../mutations/mutation')

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})