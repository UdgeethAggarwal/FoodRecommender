module.exports = (sequelize, Sequelize) => {
    const Restaurant = sequelize.define("restaurants", {
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.INTEGER
      }
    });
  
    return Restaurant;
  };