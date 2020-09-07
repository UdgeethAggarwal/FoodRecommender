
module.exports = (sequelize, Sequelize) => {
    const Cuisine = sequelize.define("cuisine", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING
    });
  
    return Cuisine;
  };