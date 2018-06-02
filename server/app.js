const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

// connect to mLab
mongoose.connect('mongodb://fred:wordpass01@ds247290.mlab.com:47290/bookstore-nn-gql')
mongoose.connection.once('open', ()=>{
    console.log('connected to database')
})

// middleware
app.use('/graphql', graphqlHTTP({   
    schema,
    graphiql:true
}))

app.listen(4000,()=>{
    console.log('now listening for requests on port 4000')
})

