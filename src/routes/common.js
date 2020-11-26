var express = require('express');
var router = express.Router();
var logTime = require("../middlewares/logTime")

router.use(logTime)

router.get('/favicon.ico', (req, res) => res.status(204));
router.get('/', (req, res) => {
    return res.render("index")
})
router.get("*",(req,res) => {
    return res.render("404")
})
module.exports = router;  