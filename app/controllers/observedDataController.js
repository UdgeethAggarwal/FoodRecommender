const db = require("../models");
const ObservedData = db.observedData;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    // if (!req.body.top_angle || !req.body.bottom_angle) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    //   return;
    // }
  console.log(req.body.FOV[0]);
  
    // Create data observed
    const observedData = {
   //   CameraAlignmentResult: req.body.CameraAlignmentResult,
      DeviceSerialNumber: req.body.DeviceSerialNumber,
      CameraAngle: req.body.CameraAngle,
      ZipFile: req.body.ZipFile
    };
  
    // Save restaurants in the database
    ObservedData.create(observedData)
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
  
    ObservedData.findAll({ where: condition })
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
