//  repo for help     https://github.com/Mayanwolfe/Full-stack-template
// first we start with npm init and clik enter on everything we will get package j.som
// now we install our dependencies npm i <dependency> we do express
// now we tell it to requiere our dependecies
const express = require("express")
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
require('dotenv').config() 

// Now we declare some variables this is so that we can connect to the database
// The following is to make sure we are able to get our connection string. Since it will be in another file that won't be pushed
// We hide secret things on .env
// we put our connection string on my .env
let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = "sample_mflix",
    collection 
// this is so that we connect 
MongoClient.connect(dbConnectionString)
// after that we consolelog that we connected to database and we set the db to the name of the database and collection we are gonna use
    .then(client => {
        console.log('Connected to database')
        db = client.db(dbName)
        collection = db.collection('movies')

    })
// Now we tell it to listen to a port. In this case we will put the por in our env file. WE do the || so that heroku can pick the port if it neeeds to
app.listen(process.env.PORT || PORT ,()=>{

    console.log(`Server is running on port ${process.env.PORT}`)
})

// we create a script so that nodemon can be run whenever we want