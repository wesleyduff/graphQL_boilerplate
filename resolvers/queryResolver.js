module.exports =  {
    Query: {
        sessions: (parent, args, { dataSources }, info) => {
            return dataSources.sessionAPI.getSessions(args)
        },
        getStarWarsPerson:  (parent, {id}, { dataSources }, info) => {
            return dataSources.starWarsAPI.getCharacter(id);
        },
        getStarWarsPlanet:  (parent, {id}, { dataSources }, info) => {
            return dataSources.starWarsAPI.getPlanet(id);
        }
    }
}