var express = require('express');

var userControler = require('../controllers/UsersController');
const auth = require("../middlewares/auth")
var router = express.Router();

router.use(auth)

router.get('/', userControler.index)

module.exports = router;  