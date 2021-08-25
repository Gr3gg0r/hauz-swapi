var express = require("express");
var router = express.Router();
var { getPeople } = require("../controllers/people");

router.use(express.json());


/**
 * @swagger
 * /people:
 *  get:
 *    summary: Returns a list of people from swapi.
 *    parameters:
 *      - in: query
 *        name: sortby
 *        schema:
 *          type: string
 *        required: false
 *        description: Sort by name or height or mass.
 *    description: Can be query with name , weight and mass .
 *    responses:
 *      '200':    # status code
 *        description: A JSON array of people object
 *        content:
 *          application/json:
 *            schema: 
 *              type: array
 *              items: 
 *                type: object
 */
router.get("/", getPeople);

module.exports = router;
