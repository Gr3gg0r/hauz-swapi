var express = require("express");
var router = express.Router();
var { getPlanet } = require("../controllers/planet");

router.use(express.json());

/**
 * @swagger
 * /planet:
 *  get:
 *    summary: Returns a list of planet from SWAPI.
 *    responses:
 *      '200':    # status code
 *        description: A JSON array of planet object
 *        content:
 *          application/json:
 *            schema: 
 *              type: array
 *              items: 
 *                type: object
 */
router.get("/", getPlanet);

module.exports = router;
