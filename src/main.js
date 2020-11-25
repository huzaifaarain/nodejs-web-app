const path = require("path")
const express = require("express")
const hbs = require("hbs")
const app = express()

const publicDir = path.join(__dirname,"../public")
const viewsPath = path.join(__dirname,"../resources/views")
const partialsPath = path.join(__dirname,"../resources/partials")

app.use(express.static(publicDir))
app.set("view engine","hbs")
app.set("views",viewsPath)
hbs.registerPartials(partialsPath)

app.get('/favicon.ico', (req, res) => res.status(204));

app.get("/",(req,res) => {
    res.render("index",{
        title : "Index"
    })
})

app.get("/orders",(req,res) => {
    res.render("orders",{
        title : "View Orders"
    })
})

app.get("*",(req,res) => {
    res.render("404")
})


app.listen(3000,() => {
    console.log("App running on port 3000")
})

