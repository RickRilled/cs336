const express = require('express')
const app = express()
const port = 3000

var bodyParser= require('body-parser')


var info=[
{
	id:"0000",
	name: "Admin",
	years: "All of them"
},
{
	id: "0001",
	name: "Royce Lloyd",
	years: "21"
},
{
	id: "0002",
	name: "Ruby Soho",
	years: "23"
}
]

app.use( bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(express.static('./'))

app.get('/', (req, res) => res.send('Please using the following routes: /people , /person/id , '
	+'/person/id/name , /person/id/years .'))

app.get('/people', (req,res) => res.json(info))
app.get('/person/[0-9][0-9][0-9][0-9]', (req,res) => {
	
})
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))