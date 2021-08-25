const { getAllStarwarsPeople } = require("../services/people-swapi");

let people = [];

(async () => {
  const data = await getAllStarwarsPeople();
  people.push(...data);
})();

const getPeople = (req, res) => {
  res.json({ count:people.length ,data: people });
};

module.exports = {
  getPeople,
};
