const
    { RESTDataSource } = require('apollo-datasource-rest'),
    CONSTANTS = require('../../CONSTANTS'),
    { ApolloError } = require('apollo-server'),
    starWars = require('../../MOCKS/data/starWars.json')
;

class SessionAPI extends  RESTDataSource {
    constructor(){
        // Always call super()
        super();
        // Sets the base URL for the REST API
        this.baseURL = 'https://swapi.dev/api/';
    }

    async getPlanet(id) {
        throw new ApolloError('ERROR : INFO : This is a test', CONSTANTS.ERRORS.STARWARS_CUSTOM_ERROR, {log: {leve: 'debug', errorCode: 'x001', message: 'ERROR : ALERT : errorCode: x001'}});
        //throw new StarWarsCustomError('ERROR : INFO : STARWARS : test throw validation', 'SessionAPI -> getPlanet', {log : {level: 'debug'}})
        //return this.get(`planets/${id}`); //comment out so we do not hit api
        return starWars.planets;
    }

    async getCharacter(id) {
        //return this.get(`people/${id}`); //comment out so we do not hit api
        return starWars.people;
    }
}

module.exports = SessionAPI;