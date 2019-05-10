const Datastore = require('nedb');

var db = new Datastore({ filename: './todo.db', autoload: true });

db.loadDatabase(function (err) {    // Callback is optional
  // Now commands will be executed
  if(err){
  	console.log("err loading db", err);
  }

});

module.exports = db;
