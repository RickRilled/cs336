const databaseName = "people";

//Create constructor 
var database = function() {
	//jsonDB is a very helpful database library
	const jsonDB = require('node-json-db');
	this.db = new jsonDB(databaseName, true, false);
};

database.prototype.addPerson= function (firstName, lastName, ID, startDate) {

	//use jsonDB push to add to database
	this.db.push("/" + ID, {
		"firstName" : firstName,
		"lastName" : lastName,
		"startDate" : startDate
	});
};

database.prototype.removePerson = function(ID) {
	this.db.delete("/" + loginID);
};

database.prototype.getPerson = function(ID) {
	return this.db.getData("/" + loginID);
};

database.prototype.getAll = function(){
	return this.db.getData("/");
}

//Export to use with server
module.exports = database;