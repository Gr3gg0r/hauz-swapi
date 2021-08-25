const { getAllStarWarPlanet } = require("../services/planet-swapi");

let planets = [];

(async () => {
  const data = await getAllStarWarPlanet();
  planets.push(...data);
})();

const getPlanet = (req, res) => {
  res.json({ count:planets.length ,data: planets });
};

module.exports = {
  getPlanet,
};
