const Restaurant = require("../models/foodRestaurantModel.js");


// Retrieve all restaurants from the database.
exports.findAll = (req, res) => {
    Restaurant.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Restaurant."
        });
      else res.send(data);
    });
  };

// Retrieve all restaurants for the particular user
exports.findOne = (req, res) => {
    Restaurant.findById(req.query.userId,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Restaurant."
        });
      else res.send(data);
    });
  };

 