const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to food recommender application." });
});

// set port, listen for requests
require("./app/routes/customerRoutes.js")(app);
require("./app/routes/foodRestaurantRoutes.js")(app);
require("./app/routes/userRoutes.js")(app);
require("./app/routes/restaurantRoutes")(app);
//app.use('/customer',require("./app/routes/customerRoutes.js"));
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});