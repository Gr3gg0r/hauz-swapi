var express = require("express");
var router = express.Router();
var { getPeople } = require("../controllers/people");

router.use(express.json());

router.get("/", getPeople);

module.exports = router;
