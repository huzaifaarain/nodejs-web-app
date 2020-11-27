var express = require('express');
var router = express.Router();
const AuthController = require("../controllers/AuthController")
router.get('/favicon.ico', (req, res) => res.status(204));
router.get('/', AuthController.login)
router.post('/', AuthController.authenticateUser)
router.get('/logout', AuthController.logout)
router.get("*",(req,res) => {
    return res.render("404")
})
module.exports = router;  