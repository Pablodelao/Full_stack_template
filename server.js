//  repo for help     https://github.com/Mayanwolfe/Full-stack-template
// first we start with npm init and clik enter on everything we will get package j.som
// now we install our dependencies npm i <dependency> we do express
// now we tell it to requiere our dependecies
const express = require("express")
const app = express()
const cors = require("cors")
const MongoClient = require("mongodb").MongoClient
require('dotenv').config() 