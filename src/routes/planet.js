var express = require("express");
var router = express.Router();
var { getPlanet } = require("../controllers/planet");

router.use(express.json());

router.get("/", getPlanet);

module.exports = router;
