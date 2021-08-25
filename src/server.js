const express = require("express");
const cors = require("cors");
const people = require("./routes/people");
const planet = require("./routes/planet");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("swagger-jsdoc");
const app = express();

const port = process.env.PORT || 3000;
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "HAUZ SWAPI Api",
      version: "1.0.0",
      description: "A hauz test for programmer.",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
      {
        url: "https://hauz.shahfiq.xyz",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const spec = swaggerDoc(options);


app.use(cors());

app.use(express.static("public"));
app.use(express.static("assets"));

app.get("/", (req, res) => res.sendFile("public/"));
app.get("/assets", (req, res) => res.sendFile("assets/"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));


app.use("/people", people);
app.use("/planet", planet);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
