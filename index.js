// Use framework 'express'  
var express = require('express');
var app = express();
var morgan = require('morgan'); 

// Create a todo list
var someTodo = ['Shopping', 'Feed the cat', 'Water the plants', 'Read the rest of the tutorial on node.js'];


// Add loggins middleware
app.use(morgan('combined'));


// Create the web server
app.get('/todo', function(req, res) {
	console.log(req.url);
	console.log(someTodo);
	// call the html template that contains this parameter 'name'
	// create the template files in a new folder called 'views'
	// put the paramater 'contactname' in the template parameter 'name'
    res.render('index.ejs', {todo: someTodo});
});

app.get('/todo/delete/:position', function(req, res) {
	console.log(req.url);
	someTodo.splice(position, 1);
	console.log(someTodo);
    res.render('index.ejs', {todo: someTodo});
});

app.get('/todo/', function(req, res) {
	
	console.log(someTodo);
    res.render('index.ejs', {todo: someTodo});
});


app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
	res.status(404).send('No corresponding page !'); 
});


// Define listening port
app.listen(9000);



