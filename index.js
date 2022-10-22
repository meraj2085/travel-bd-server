const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const touristSpots = require("./data/touristSpots.json");

app.get("/", (req, res) => {
  res.send("Travel BD server is running...");
});

app.get("/spots", (req, res) => {
  res.send(touristSpots);
});

app.get("/spots/:id", (req, res) => {
  const id = req.params.id;

  const selectedSpot = touristSpots.find((h) => h.id === id);
  res.send(selectedSpot);
});

app.listen(port, () => {
  console.log(`Travel BD server is running on port ${port}`);
});
