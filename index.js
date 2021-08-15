const
    { ApolloServer, gql } = require('apollo-server'),
    sessions = require('./MOCKS/data/sessions.json')
;


/**
 * Type Definitions
 */
const
    typeDefs = require('./schemas/example/exampleSchema');




/**
 * Resolvers
 */
const
    resolvers = require('./resolvers/queryResolver')



/**
 * Data Sources
 */

const dataSources = () => ({
    sessionAPI: new (require('./dataSources/example/sessions'))()
})



const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
});


server
    .listen({
        port: process.env.PORT || 3000
    })
    .then(({url}) => {
        console.log(`INFO : SERVER NOTIFICATION : graph QL running at ${url}`)
    });