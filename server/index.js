const express = require("express");
const cors = require("cors");
const port = 4004;
const app = express();
const controller = require("./controller.js");
const { getHouses, deleteHouse, createHouse, updateHouse } = controller;

app.use(express.json());
app.use(cors());

app.get("/api/houses", getHouses);

app.post("/api/houses", createHouse);

app.put("/api/houses/:id", updateHouse);

app.delete("/api/houses/:id", deleteHouse);

app.listen(port, () => console.log(`Server running on ${port}`));
