var userModel = require('../models/User');

class AuthController {
    login(req, res) {
        const { flash } = req.session
        res.render("auth/login", { flash })
    }

    authenticateUser(req, res) {
        console.log(req.body)
        req.session.user = {
            email: req.body.email,
            isAdmin: true
        }
        res.redirect("/user")
    }

    logout(req, res) {
        req.session.destroy((err) => {
            if(err){
                console.log(err)
            }
            res.redirect("/")
        })
    }
}

module.exports = new AuthController;  