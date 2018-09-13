//This program forms a basic framework for a Person class in JS
//Written by Royce Lloyd for CS 336 at Calvin College
//9-14-2018

//Create constructor method for person with opening arguments
function Person(firstName, lastName, birthday, friends){
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthday = birthday;
	this.friends = friends
}

//Print out information about the person
Person.prototype.sayHI = function() {
	console.log("Hello! My name is " + this.firstName + " " + this.lastName);
}

//Mutator method to change first name
Person.prototype.newFirstName = function(nameF) {
	this.firstName = nameF;
}

//Mutator method to change last name
Person.prototype.newLastName = function(nameL) {
	this.lastName = nameL;
}

//Helpful getter function to calculate age
Person.prototype.getAge = function(){
	var today = new Date();
	var birthday = new Date(this.birthday);
	var age = today.getFullYear() - birthday.getFullYear();
	return age;
}

//Add a referance to another instance of a person in a list of friends
Person.prototype.addFriend = function(frindObject){
	this.friends.push(frindObject);
}

//Test the constuctor, mutator methods, and calculate age
/* var ruby = new Person("Ruby", "Soho", "1986/09/08", []);
ruby.sayHI();
ruby.newFirstName("Royce");
ruby.newLastName("Lloyd");
ruby.sayHI();
console.log("I am " + ruby.getAge() + " years old."); */

//Test the addFriend method
/* var topaz = new Person("Topaz", "Ripley", "1987/10/12", []);
topaz.sayHI();
ruby.addFriend(topaz);
console.log(ruby); */

//Create a Student class that inherites the Person class and adds a major argument 
function Student(firstName, lastName, birthday, friends, major){
	Person.call(this, firstName, lastName, birthday, friends);
	this.major = major;
}

//Point the studnet class to the parent class Person
Student.prototype = Object.create(Person.prototype);

//Helpful getter function that returns major
Student.prototype.getMajor = function(){
	return this.major;
}

//Test the student class and observe inheritance
/* var stew = new Student("Stew", "Dent", "1997/04/07", [], "Computer Science");
stew.sayHI();
stew.newFirstName("J. Alfred");
stew.newLastName("Prufrock");
stew.sayHI();
console.log("I am " + stew.getAge() + " years old"); 
console.log("I am studying " + stew.getMajor());
stew.addFriend(ruby);
stew.addFriend(topaz);
console.log(stew); */

//use the instanceof operator to test sub-classing
/* console.log(ruby instanceof Person);
console.log(topaz instanceof Person);
console.log(stew instanceof Student); */



