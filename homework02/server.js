const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
var path = require('path');
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Classmates described creating a new script for all the database methods
const database = require('./database_modules/database.js');
const db = new database();

//Function for finding total number of years worked
function yearsWorked(startDate){
	var today = new Date();
	var start = new Date(startDate);
	var years = today.getFullYear() - start.getFullYear();

	return years;
};

//Spit out all the information in the database
app.get('/people', function (req, res){
	var users = db.getAll();
		if (users != null) {
			res.json(users);
		} else {
			res.sendStatus(404);
		}
});

//Post people information
app.post("/people", function (req, res) {
	var person = db.getPerson(req.body.ID);
	if (person == null) {
		var ret = db.addPerson(req.body.firstName, req.body.lastName, req.body.ID, req.body.startDate);
	} else{
		res.sendStatus(404);
	}
});

//Multiple functions for a specific person
app.route('/person/:personId(\\d+)').get(function (req, res){
	var person = db.getPerson(req.query.ID);
	if (person != null){
		person.years = yearsWorked(person.startDate);
	}else{
		res.sendStatus(404);
	}
}).put(function(req, res){
	//Add person to database
	var entry = db.addPerson(req.body.firstName, req.body.lastName, req.body.ID, req.body.startDate);

}).delete(function(req, res){
	//Delete a person
	var person = db.getPerson(req.params.ID);
	if(person != null){
		var entry = db.removePerson(req.params.ID);
	} else {
		res.sendStatus(404);
	}
});

//Get information on person
app.get('/person/:personId(\\d+)/name', function (req, res) {
	var person = db.getPerson(req.body.ID);
	if (person != null) {
		res.json(person.firstName + " " + person.lastName);
	} else {
		res.sendStatus(404);
	}
});

//Get the year information for a person
app.get('/person/:personId(\\d+)/years', function (req, res) {
	var person = db.getPerson(req.params.personId);
	if (person != null) {
		res.json("" + yearsWorked(person.startDate));
	} else {
		res.sendStatus(404);
	}
});


//This listen is causing problems with in a deep js file, commenting out works. 
// app.listen(app.get('port'), () => console.log('Server started on: http://localhost:' + app.get('port') + '/'));


