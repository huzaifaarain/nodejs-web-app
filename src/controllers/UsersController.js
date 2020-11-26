var userModel = require('../models/User');

class UsersController {
    index(req, res) {
        res.render("users/index")
    }
}

module.exports = new UsersController;  