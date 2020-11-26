var express = require('express')
var router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
const logTime = (req, res, next) => {
    console.log("App Level Middleware: Passing through logTime middleware")
    console.log("Req :",req.originalUrl)
    next()
}

module.exports = logTime