const express = require('express');
const apiRoutes = express.Router();
const db = require('./../models/model.js');

apiRoutes.get('/getTodos', (req, res) => {
	db.find({}, function (err, docs) { 
	  res.send(docs);
	});
});

apiRoutes.post('/createTodos', (req, res)=>{
	db.insert(req.body, function (err, newDoc) { 
	  res.send(newDoc);
	});
});

apiRoutes.get('/getTodos/:todoId', (req, res) => {
	db.find({_id: req.params.todoId}, function (err, docs) { 
	  res.send(docs);
	});
});


apiRoutes.put('/updateTodo/:todoId', (req, res) => {
	db.update({_id: req.params.todoId}, { $set: req.body}, function (err, numReplaced) {
		if(err){
			console.log('err', err)
		} else {
			db.find({_id: req.params.todoId}, function (err, docs) { 
			  res.send(docs);
			});		
		}
	});
});


apiRoutes.delete('/updateTodo/:todoId', (req, res) => {
	db.remove({_id: req.params.todoId}, function (err, numReplaced) {
		if(err){
			console.log('err', err)
		} else {
			db.find({}, function (err, docs) { 
			  res.send(docs);
			});		
		}
	});
});


module.exports = apiRoutes;