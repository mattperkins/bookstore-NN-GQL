const graphql = require('graphql')
const _ = require('lodash')

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID} = graphql

// dummy data
var books = [
    {id:"1", title: "Lord of the rings", genre:"fantasy"},
    {id:"2", title: "1984", genre:"drama"},
    {id:"3", title: "Lord of the flies", genre:"thriller"}
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
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        book: {
            type: BookType,
            args:{id:{type: GraphQLID}},
            resolve(parent, args){
                // code to get data from db or local dummy data
                // lodash
                return _.find(books, {
                    id: args.id
                })
            }
        }
    }
})

// example query shape
// book(id: "2"){
//     name
//     genre
// }


module.exports = new GraphQLSchema({
    query: RootQuery
})