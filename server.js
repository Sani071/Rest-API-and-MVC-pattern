const express = require('express')
const morgan = require('morgan')
const mongoose  = require('mongoose')
const app = express()
const bodyParser  = require('body-parser')
//mongoose connection
 mongoose.connect('mongodb://localhost/nodejs')
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('err', err=>console.log(err))
db.once('open',()=>console.log("database conneted succesfully"))
//middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const bookRouter = require('./api/bookRoute/bookRoutes')
const Port = process.env.Port || 4000
app.use('/book', bookRouter)
app.listen(Port, () => console.log(" I am listening on Port: " + Port))