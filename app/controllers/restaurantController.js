const db = require("../models");
const Restaurants = db.restaurants;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a restaurants
    const restaurant = {
      name: req.body.name,
      location: req.body.location,
      capacity: req.body.capacity ? req.body.capacity : false
    };
  
    // Save restaurants in the database
    Restaurants.create(restaurant)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Restaurants.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving restaurants."
        });
      });
  };
// Find a single restaurants with an id
exports.findOne = (req, res) => {
  
};

// Update a restaurants by the id in the request
exports.update = (req, res) => {
  
};

// Delete a restaurants with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all restaurants from the database.
exports.deleteAll = (req, res) => {
  
};
