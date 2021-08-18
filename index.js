const
    { ApolloServer, gql } = require('apollo-server')
;


/**
 * Type Definitions
 */
const
    sessionTypeDefs = require('./schemas/example/sessionSchema'),
    queryTypeDefs = require('./schemas/example/querySchema'),
    starWarsTypeDefs = require('./schemas/example/starWarsSchema'),
    typeDefs = `${sessionTypeDefs} ${queryTypeDefs} ${starWarsTypeDefs}`
;




/**
 * Resolvers
 */
const
    resolvers = require('./resolvers/queryResolver')



/**
 * Data Sources
 */

const dataSources = () => ({
    sessionAPI: new (require('./dataSources/example/sessions'))(),
    starWarsAPI: new (require('./dataSources/example/starWarsApi'))()
})



const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
});


server
    .listen({
        port: process.env.PORT || 4000
    })
    .then(({url}) => {
        console.log(`INFO : SERVER NOTIFICATION : graph QL running at ${url}`)
    });