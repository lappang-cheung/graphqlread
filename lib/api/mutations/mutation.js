const graphql = require('graphql')
const { GraphQLObjectType, 
        GraphQLID, 
        GraphQLNonNull, 
        GraphQLString,
        GraphQLInt } = graphql

const Author = require('../../models/author')
const Book = require('../../models/book')

const AuthorType = require('../types/author_type')
const BookType = require('../types/book_type')

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
        }
    }
})

module.exports = mutation