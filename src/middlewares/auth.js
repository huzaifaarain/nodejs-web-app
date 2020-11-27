var express = require('express')

// a middleware function with no mount path. This code is executed for every request to the router
const auth = (req, res, next) => {
    if(req.session.user == undefined){
        req.session.flash = "Please login";
        return res.redirect("/")
    }
    next()
}

module.exports = auth