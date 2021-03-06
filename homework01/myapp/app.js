const express = require('express')
const app = express()
const port = 3000

var bodyParser= require('body-parser')


var users=[
{
	loginID: "0000",
	firstName: "Admin",
	lastName: "Admin",
	startDate: "1/1/1970"
},
{
	loginID: "0001",
	firstName: "Royce",
	lastName: "Lloyd",
	startDate: "4/7/1997"
},
{
	loginID: "0002",
	firstName: "Ruby",
	lastName: "Soho",
	startDate: "11/3/1995"
}
]

app.use( bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(express.static('./'))

app.get('/', (req, res) => res.send('Please using the following routes: /people , /person/id , '
	+'/person/id/name , /person/id/years .'))

app.get('/people', (req,res) => res.json(users))

app.get('/person/:loginID', (req,res) => {
	users.forEach((user) => {
		if(user.loginID == req.params.loginID){
			res.json(user)
		}
	})
	res.sendStatus(404)
})

app.get('/person/:loginID/name', (req,res) => {
	users.forEach((user) => {
		if(user.loginID == req.params.loginID){
			let fullName = user.firstName + ' ' + user.lastName
			res.json(fullName)
		}
	})	
	res.sendStatus(404)
})
 
 app.get('/person/:loginID/years', (req, res) => {	
	users.forEach((user) => {
		if(user.loginID == req.params.loginID){
			var today = new Date()
			var startDate = new Date(user.startDate)
			var service = today.getFullYear() - startDate.getFullYear()
			res.json(service)
		}
	})	
	res.sendStatus(404)
 })


app.listen(port, () => console.log(`Running on ${port}!`))