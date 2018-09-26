// Required modules
const express = require('express')
const mongoose = require('mongoose')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')

// Server configurations
const env = require('./configs/environments')
const PORT = process.env.PORT || 4000
const app = express()

app.use(cors())

// GraphQL configurations
const schema = require('./api/schema/schema')

// Health check to see if server online
app.use('/healthCheck', async(req, res,next) => {
    return res.status(200).json({ message: 'API backend user online'})
})

// Createing the GraphQL port
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

// Connect to mongo and start on the env port
app.listen(PORT, async() => {
    await mongoose.connect(env.mongoURI, { useNewUrlParser: true })
    console.log(`Server is start on port ${PORT}`)
})