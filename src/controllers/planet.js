const { getAllStarWarPlanet } = require("../services/planet-swapi");
//Thankfully nodejs run the whole file first , so no double request .
const { getAllStarwarsPeople } = require("../services/people-swapi");

let planets = [];
let people = [];
//Non Blocking
(async () => {
  const data = await getAllStarWarPlanet();
  planets.push(...data);
  console.log("done");
})();

//Non blocking code
(async () => {
  const data = await getAllStarwarsPeople(); 
  people.push(...data);
})();

const getPlanet = (req, res) => {

  let newPlanets = [...planets].map(({ residents, ...rest }) => {
    let newRes = residents.map((f) => {
      let id = f.split("/").slice(-2, -1);
      try {
        return people[id - 1].name;
      } catch (e) {
        console.log(id - 1);
      }
    });

    return { ...rest, residents: newRes };
  });

  res.json({ count: planets.length, data: newPlanets });
};

module.exports = {
  getPlanet,
};
