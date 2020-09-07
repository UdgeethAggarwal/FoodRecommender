module.exports = app => {
    const restaurants = require("../controllers/restaurantController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", restaurants.create);
  
    // Retrieve all Tutorials
    router.get("/", restaurants.findAll);
  
    app.use('/api/restaurants', router);
  };