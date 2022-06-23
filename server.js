//  repo for help     https://github.com/Mayanwolfe/Full-stack-template
// first we start with npm init and clik enter on everything we will get package j.som
// now we install our dependencies npm i <dependency> we do express
// now we tell it to requiere our dependecies
const express = require("express")
const app = express()
const cors = require("cors")
const { request } = require("http")
const { response } = require("express")
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
// app.listen(process.env.PORT || PORT ,()=>{

//     console.log(`Server is running on port ${process.env.PORT}`)
// })

// we create a script so that nodemon can be run whenever we want
// the script is  "dev": "nodemon server.js"

// We need to put our middleware before our app listen

// We tell it to use ejs
app.set("view engine","ejs")
// it sets up a public folder
app.use(express.static('public'))
// helps parse urls idk
app.use(express.urlencoded)({extended:true})
app.use(express.json())
app.use(cors())
// we create 2 folders called public and views and add ffiles like main.js style.css and index.ejs
// we add content to main style and index.ejs



app.get("/",async(request,response)=>{
    try{
        response.render('index.ejs')
    }catch(error){
        response.status(500).send({message: error.message})
    }

})




app.listen(process.env.PORT || PORT ,()=>{

    console.log(`Server is running on port ${process.env.PORT}`)
})
// Now we push to heroku