
const typeDef = `
    type Query{
        sessions:[Session],
        getStarWarsPerson(id:ID!):starWarsPeople,
        getStarWarsPlanet(id:ID!):starWarsPlanet
    }
`

module.exports = typeDef;