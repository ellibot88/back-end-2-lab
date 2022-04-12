const data = require("./db.json");
const counter = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(data);
  },
  deleteHouse: (req, res) => {
    const number = parseInt(req.params.id);

    for (let i = 0; i < data.length; i++) {
      if (data[i].id === number) {
        data.splice(i, 1);
        return;
      }
    }
    res.status(200).send(data);
  },
  createHouse: (req, res) => {
    let newHouse = {
      id: counter,
      address: req.body.address,
      price: req.body.price,
      imageURL: req.body.imageURL,
    };
    data.push(newHouse);
    res.status(200).send(data);
  },
  updateHouse: (req, res) => {
    const number = parseInt(req.params.id);
    const sign = req.body.type;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === number && sign === "plus") {
        data[i].price += 10000;
      } else if (data[i].id === number && sign === "minus") {
        data[i].price -= 10000;
      }
    }
    res.status(200).send(data);
  },
};
