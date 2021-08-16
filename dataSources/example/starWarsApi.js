const
    { RESTDataSource } = require('apollo-datasource-rest'),
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
        //return this.get(`planets/${id}`); //comment out so we do not hit api
        return starWars.planets;
    }

    async getCharacter(id) {
        //return this.get(`people/${id}`); //comment out so we do not hit api
        return starWars.people;
    }
}

module.exports = SessionAPI;