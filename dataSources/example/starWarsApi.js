const
    { RESTDataSource } = require('apollo-datasource-rest')
;

class SessionAPI extends  RESTDataSource {
    constructor(){
        // Always call super()
        super();
        // Sets the base URL for the REST API
        this.baseURL = 'https://swapi.dev/api/';
    }

    async getPlanet(id) {
        return this.get(`planets/${id}`);
    }

    async getCharacter(id) {
        return this.get(`people/${id}`);
    }
}

module.exports = SessionAPI;