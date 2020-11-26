var path     = require('path')  
var express  = require('express')
var router = express.Router()
const hbs = require("hbs")
const commonRoutes = require('./routes/common')
const userRoutes = require('./routes/users')
const appLevelLogTime = require("./middlewares/appLevelLogTime")

  
var app = express()  


const publicDir = path.join(__dirname,"../public")
const viewsPath = path.join(__dirname,"views")
const partialsPath = path.join(__dirname,"views/partials")

app.use(express.static(publicDir))
app.set('view engine','hbs')  
app.set("views",viewsPath)  
hbs.registerPartials(partialsPath)

app.use(appLevelLogTime)
app.use('/user/',userRoutes);  
app.use('/',commonRoutes);  
router.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})  

var port = process.env.port || 3000;  
app.listen(port,()=>console.log(`server running at port ${port}`))