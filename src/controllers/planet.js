const { getAllStarWarPlanet } = require("../services/planet-swapi");

let planets = [];

//Non Blocking
(async () => {
  const data = await getAllStarWarPlanet();
  planets.push(...data);
  console.log("done");
})();

const getPlanet = (req, res) => {
  res.json({ count:planets.length ,data: planets });
};

module.exports = {
  getPlanet,
};
