// import { GraphQLServer } from 'graphql-yoga'
// import path from 'path'

const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers')
const mongoose = require('mongoose');

const config = require('./config/dbConfing')

mongoose.connect(`mongodb+srv://${config.user}:${config.password}@cluster0-jpwaf.mongodb.net/omnistack8?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
})

server.start()