
module.exports = (sequelize, Sequelize) => {
    const UserCuisine = sequelize.define("user_cuisine", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
            // This is a reference to another model
            model: db.users,
            key: 'id'
            }
        },
      cuisine_id: {
            type: Sequelize.INTEGER,
            references: {
                // This is a reference to another model
                model: db.cuisine,
                key: 'id'
                }
            }
    });
  
    return UserCuisine;
  };