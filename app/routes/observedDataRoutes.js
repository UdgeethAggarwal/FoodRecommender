module.exports = app => {
    const observedData = require("../controllers/observedDataController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", observedData.create);
  
    // Retrieve all Tutorials
    router.get("/", observedData.findAll);
  
    app.use('/api/upload_camera_alignment_results', router);
  };