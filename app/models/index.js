const dbConfig = require("../config/dbconfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.restaurants = require("./restaurantModel.js")(sequelize, Sequelize);
db.users = require("./usersModel.js")(sequelize, Sequelize);
db.cuisine = require("./cuisineModel.js")(sequelize, Sequelize);
db.userCuisine = require("./userCuisineModel.js")(sequelize, Sequelize);
module.exports = db;