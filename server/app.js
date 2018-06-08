const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

// environment variable to protect db access 
const MLAB_URI = require('../env.js')

const app = express()

// allow cross origin requests (cors)
app.use(cors())

// connect to mLab
mongoose.connect(MLAB_URI.MLAB_URI)
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

