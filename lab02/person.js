//This program forms a basic framework for a Person class in JS
//Written by Royce Lloyd for CS 336 at Calvin College
//9-14-2018

function Person(firstName, lastName, birthday){
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthday = birthday;
	var friends = [];
}

Person.prototype.sayHI = function() {
	console.log("Hello! My name is " + this.firstName + " " + this.lastName );
}

Person.prototype.newFirstName = function(nameF) {
	this.firstName = nameF;
}

Person.prototype.newLastName = function(nameL) {
	this.lastName = nameL;
}

Person.prototype.getAge = function(){
	var today = new Date();
	var birthday = new Date(this.birthday);
	var age = today.getFullYear() - birthday.getFullYear();
	return age;
}

Person.prototype.toString = function(){
	return [this.firstName, " ", this.lastName].join("");
}

Person.prototype.addFriend = function(frindString){
	this.friends.push(frindString);
}

var ruby = new Person("Ruby", "Soho", "1986/09/08")
ruby.sayHI();
ruby.newFirstName("Royce");
ruby.newLastName("Lloyd");
ruby.sayHI();
console.log("I am " + ruby.getAge() + " years old.");

var topaz = new Person("Topaz", "Ripley", "1987/10/12");
topaz.sayHI();
ruby.addFriend(topaz.toString());
console.log(ruby);

function Student(firstName, lastName, birthday, major){
	Person.call(this, firstName, lastName, birthday);
	this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.getMajor = function(){
	return this.major;
}