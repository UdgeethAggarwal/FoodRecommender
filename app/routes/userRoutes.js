module.exports = app => {
     const users = require("../controllers/userController.js");
   
     app.get("/users", users.findAll);
   
   
   };