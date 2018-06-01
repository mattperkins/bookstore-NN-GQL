const graphql = require('graphql')

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
                args.id
                // code to get data db 
            }
        }
    }
})

// book(id: "2"){
//     name
//     genre
// }


module.exports = new GraphQLSchema({
    query: RootQuery
})