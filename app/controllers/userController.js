//const {User} = require("../models/index");

// const UserModel = require('../models/usersModel').default
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
// Retrieve all restaurants from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    User.findAll({ where: condition })
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
// exports.findAll = (req, res) => {
//   //  console.log(User);
//   User.getAll((err, data) => {
//       if (err)
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving Restaurant."
//         });
//       else res.send(data);
//     });
//   };

// Retrieve all restaurants for the particular user
// exports.findOne = (req, res) => {
//     Restaurant.findById(req.query.userId,(err, data) => {
//       if (err)
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving Restaurant."
//         });
//       else res.send(data);
//     });
//   };

 