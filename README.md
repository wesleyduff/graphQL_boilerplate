# GraphQL Server for Raven's lower services
    GraphQL API
--- 
*requirements*
- nvm installed with node version 14.15.5
---


Make one query for all api endpoints from these lower microservices.
- weather
- mobile
- transit

#Server : 
This is what we wil be using
https://www.apollographql.com/docs/apollo-server/

#iOS
https://www.apollographql.com/docs/ios/

#Android
https://www.apollographql.com/docs/android/

#React
https://www.apollographql.com/docs/react/

## RUN THE APP
Running the app requires you to run an a node script
- `npm start`

Visit http://localhost:3000/ and click on the button to query your service.

# CURL commands
You MUST be on the network to have weather work, others will work without being on the network
- run app

### Weather Daily w/ day of week w/ moonPhase for that day
query{getWeatherDaily(zoneID:"54e4ffc9ceafc43649b4dae9",zipcode:"80104"){status,days{dayOfWeek,moonPhase}}}
---
POST
curl --request POST   --header 'content-type: application/json'   --url http://localhost:3001/   --data '{"query":"{ getWeatherDaily(zoneID: \"54e4ffc9ceafc43649b4dae9\", zipcode: \"80104\") { status, days { dayOfWeek, moonPhase } }}"}'

GET
curl --request GET   --header 'content-type: application/json'   --url http://localhost:3001/graphql?query=query%7BgetWeatherDaily%28zoneID:%2254e4ffc9ceafc43649b4dae9%22,zipcode:%2280104%22%29%7Bstatus,days%7BdayOfWeek,moonPhase%7D%7D%7D



### StarWars Person
query{getStarWarsPerson(id:1){name}}
----
POST
curl --request POST   --header 'content-type: application/json'   --url http://localhost:3001/   --data '{"query":"{ getStarWarsPerson(id:1) { name }}"}'

GET
curl --request GET   --header 'content-type: application/json'   --url http://localhost:3001/graphql?query=query%7BgetStarWarsPerson%28id:1%29%7Bname%7D%7D



### StarWars Planet : CUSTOM ERROR
query{getStarWarsPlanet(id:1){name}}
----
POST
curl --request POST   --header 'content-type: application/json'   --url http://localhost:3001/   --data '{"query":"{ getStarWarsPlanet(id:1) { name }}"}'

GET
curl --request GET   --header 'content-type: application/json'   --url http://localhost:3001/graphql?query=query%7BgetStarWarsPlanet%28id:1%29%7Bname%7D%7D


### Session :
query{sessions{name}}
----
POST
curl --request POST   --header 'content-type: application/json'   --url http://localhost:3001/   --data '{"query":"{ sessions{ title }}"}'

GET : // these can be cached
curl --request GET   --header 'content-type: application/json'   --url http://localhost:3001/graphql?query=query%7Bsessions%7Btitle%7D%7D

### Session + StarWars Person
query{sessions{title},getStarWarsPerson(id:1){name}}
---
POST
curl --request POST   --header 'content-type: application/json'   --url http://localhost:3001/   --data '{"query":"{ sessions{ title },getStarWarsPerson(id:1) { name }}"}'

GET : // these can be cached
curl --request GET   --header 'content-type: application/json'   --url http://localhost:3001/graphql?query=query%7Bsessions%7Btitle%7D,getStarWarsPerson%28id:1%29%7Bname%7D%7D

### Helper Methods: 

*encode request for get*
```javascript
//encodeURI and encodeURIComponent do not encode encode parenthesis 
let graphQlQuery = 'query{sessions{title},getStarWarsPerson(id:1){name}}'
let queryStringForGetRequest = encodeURI(graphQlQuery).replace('(', "%28").replace(')', "%29")
```