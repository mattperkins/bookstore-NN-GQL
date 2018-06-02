const graphql = require('graphql')
const _ = require('lodash')

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt} = graphql

// dummy data
var books = [
    {id:"1", title: "Lord of the rings", genre:"fantasy", authorId: "1"},
    {id:"2", title: "1984", genre:"drama", authorId: "2"},
    {id:"3", title: "Lord of the flies", genre:"thriller", authorId: "3"}
]

var authors = [
    {id:"1", age:100, name:"J. R. Tolkein"},
    {id:"2", age:95, name:"George Owell"},
    {id:"3", age:100, name:"William Golding"}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        genre: {type: GraphQLString},
        author:{
            type: AuthorType,
            resolve(parent, args){
                return _.find(authors, {id: parent.authorId})
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        age: {type: GraphQLInt},
        name: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
        fields: {
            book: {
                type: BookType,
                args:{ id: { type: GraphQLID }},
                resolve(parent, args){
                    return _.find(books, {
                        id: args.id
                    })
                }
            },
            author: {
                type: AuthorType,
                args:{ id: { type: GraphQLID }},
                resolve(parent, args){
                    return _.find(authors, {
                        id: args.id
                    })
                },
            }
        }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})