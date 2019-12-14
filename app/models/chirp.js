// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Chirp = sequelize.define("chirp", {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE
});





// Syncs with DB
Chirp.sync({force: false});

// to drop and recreate table, will drop table and recreate new table with new data
//Chirp.synch({force: true});



// Makes the Chirp Model available for other files (will also create a table)
module.exports = Chirp;
