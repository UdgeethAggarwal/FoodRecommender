module.exports = app => {
    const foodRestaurants = require("../controllers/foodRestaurantController.js");
  
     // Retrieve restaurants could be liked by user
     app.get("/foodRestaurants", foodRestaurants.findOne);

    // // Retrieve restaurants
    // app.get("/foodRestaurants", foodRestaurants.findAll);
  
  
  };