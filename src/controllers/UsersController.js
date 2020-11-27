var userModel = require('../models/User');
const User = require("../models/User")
class UsersController {
    index(req, res) {
        console.log(req.session)
        User.insertUser()
        res.render("users/index")
    }
}

module.exports = new UsersController;  