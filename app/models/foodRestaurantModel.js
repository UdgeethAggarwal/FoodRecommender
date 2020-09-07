const sql = require("./db.js");

// constructor
const Restaurant = function(restaurant) {
//   this.email = customer.email;
//   this.name = customer.name;
//   this.active = customer.active;
};


Restaurant.findById = async (userId, result) => {
    // var cuisinedata = await sql.query(`SELECT cuisine_id FROM user_fav_cuisine WHERE user_id = ${userId}`);
    // var favCuisine = cuisinedata[0];
    // console.log("this is list",favCuisine);
    var favCuisineArr = [];
    sql.query(`SELECT cuisine_id FROM user_fav_cuisine WHERE user_id = ${userId}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        if (res.length) {
         res.forEach(val=>{
             favCuisineArr.push(val.cuisine_id);
         });
        sql.query(`SELECT * FROM restaurants WHERE id = ${userId}`, (err, res) => {
            if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
            }

            if (res.length) {
            console.log("found customer: ", res[0]);
            result(null, res[0]);
            return;
            }

            // not found Customer with the id
            result({ kind: "not_found" }, null);
        });
          
          return;
        }
    
        // not found Customer with the id
        result({ kind: "not_found" }, null);
      });

};

Restaurant.getAll = result => {
  sql.query("SELECT * FROM restaurants", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};



module.exports = Restaurant;