const
    sessions = require('../../MOCKS/data/sessions.json')
;

module.exports =  {
    Query: {
        sessions: () => {
            return sessions
        }
    }
}