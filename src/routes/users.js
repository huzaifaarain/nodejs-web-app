var express = require('express');
var userControler = require('../controllers/UsersController');
const logTime = require("../middlewares/logTime")
var router = express.Router();

router.use(logTime)

router.get('/', userControler.index)

module.exports = router;  