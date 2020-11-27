const path = require('path')
const express = require('express')
const session = require("express-session")
const hbs = require("hbs")
const MongoStore = require('connect-mongo')(session);
const DbConnection = require("./models/dbConnection")
const commonRoutes = require('./routes/common')
const userRoutes = require('./routes/users')

const app = express()


app.use(session({
    secret:"!@#$%^&*(" , 
    saveUninitialized : false,
    store : new MongoStore({
        clientPromise : DbConnection.getClient(),
        dbName : DbConnection.databaseName
    })
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const publicDir = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "views")
const partialsPath = path.join(__dirname, "views/partials")

app.use(express.static(publicDir))
app.set('view engine', 'hbs')
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

app.use('/user/', userRoutes);
app.use('/', commonRoutes);

var port = process.env.port || 3000;
app.listen(port, () => console.log(`server running at port ${port}`))