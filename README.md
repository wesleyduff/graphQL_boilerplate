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


GET Weather Daily w/ day of week w/ moonPhase for that day
---
curl --request POST   --header 'content-type: application/json'   --url http://localhost:3001/   --data '{"query":"{ getWeatherDaily(zoneID: \"54e4ffc9ceafc43649b4dae9\", zipcode: \"80104\") { status, days { dayOfWeek, moonPhase } }}"}'

GET StarWars Person
----
curl --request POST   --header 'content-type: application/json'   --url http://localhost:3001/   --data '{"query":"{ getStarWarsPerson(id:1) { name }}"}'

GET StarWars Planet : CUSTOM ERROR
----
curl --request POST   --header 'content-type: application/json'   --url http://localhost:3001/   --data '{"query":"{ getStarWarsPlanet(id:1) { name }}"}'

GET session :
----
curl --request POST   --header 'content-type: application/json'   --url http://localhost:3001/   --data '{"query":"{ sessions{ title }}"}'