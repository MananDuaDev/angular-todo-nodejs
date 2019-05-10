const express = require('express');
const apiRoutes = express.Router();
const db = require('./../models/model.js');

apiRoutes.get('/todo', (req, res) => {
	
	db.find({}, function (err, docs) {
	  // docs is an array containing documents Mars, Earth, Jupiter
	  // If no document is found, docs is equal to []
	  res.send(docs);
	});
});

apiRoutes.post('/todo', (req, res) => {
	
 console.log("body", req.body);
// console.log("params", req.params);
// console.log("query", req.query);
// res.send(req.body);
	db.insert(req.body, function (err, newDoc) {   // Callback is optional
	  // newDoc is the newly inserted document, including its _id
	  // newDoc has no key called notToBeSaved since its value was undefined
	  if(err){
	  	res.send(err.message);
	  }
	  else{
	  	res.send(newDoc);
	  }
	});
});
apiRoutes.put('/todo', (req,res) =>{
	db.update({ _id : req.body.id }, { $set: { done: req.body.done } }, { multi: true }, function (err, numReplaced) {
	   if(err){
	  	res.send(err.message);
	  }
	  else{
	  	res.send("success");
	  }
	});
	
});

apiRoutes.delete('/todo', (req, res) => {
	db.remove({ done: true}, {multi : true}, function (err, numReplaced) {
		if(err){
			res.send(err.message);
		} else {
			db.find({}, function (err, docs) { 
			  res.send(docs);
			});		
		}
	});
});

module.exports = apiRoutes;