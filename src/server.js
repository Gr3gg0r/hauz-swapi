const express = require("express");
const people = require("./routes/people");
const planet = require("./routes/planet");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.static("assets"));

app.get("/", (req, res) => res.sendFile("public/"));
app.get("/assets", (req, res) => res.sendFile("assets/"));

app.use("/people", people);
app.use("/planet", planet);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
