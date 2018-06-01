const graphql = require('graphql')
const _ = require('lodash')

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql

// dummy data
var books = [
    {name: 'Lord of the rings', genre:'fantasy', id:1},
    {name: '1984', genre:'drama', id:2},
    {name: 'Lord of the flies', genre:'thriller', id:3}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        book: {
            type: BookType,
            args:{id:{type: GraphQLString}},
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