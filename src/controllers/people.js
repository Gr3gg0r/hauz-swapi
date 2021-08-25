const { getAllStarwarsPeople } = require("../services/people-swapi");

let people = [];

//Non blocking code
(async () => {
  const data = await getAllStarwarsPeople();
  people.push(...data);
  console.log("done");
})();

const getPeople = (req, res) => {
  const sortby = req.query.sortby;
  let peopleSort = [...people];

  if (typeof sortby !== "undefined") {
    switch (sortby) {
      case "name":
        peopleSort.sort((p1, p2) => p1.name.localeCompare(p2.name));
        break;
      case "height":
        peopleSort.sort(
          (p1, p2) =>
            parseInt(p1.height.replace(/,/g, "")) -
            parseInt(p2.height.replace(/,/g, ""))
        );
        break;
      case "mass":
        peopleSort.sort(
          (p1, p2) =>
            parseInt(p1.mass.replace(/,/g, "")) -
            parseInt(p2.mass.replace(/,/g, ""))
        );
        break;
      default:
        peopleSort = ["Query Not Exist"];
        break;
    }
  }
  res.json({ count: peopleSort.length, data: peopleSort });
};

module.exports = {
  getPeople,
};
