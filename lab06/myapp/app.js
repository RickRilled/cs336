//Written by Royce Lloyd for CS336 lab 06

const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const httpStatus = require('http-status-codes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 


app.get('/', (req, res) => res.send('Hello!'))
app.get('/request', (req, res) => res.send('This is an example of the get method.'))

//Non-get methods --------------------------------------------------
app.post('/request', function (req, res) {
	res.send("Got a POST request")
})

app.put('/request', function (req, res) {
	res.send('Got a PUT request')
})

app.delete('/request', function (req, res) {
	res.send('Got a DELETE request')
})

app.head('/request', function (req, res) {
	res.send('Got a HEAD request')
})

//Send a not found status using http codes--------------------------
app.get('/failtest', function (req, res){
	res.sendStatus(httpStatus.NOT_FOUND)
})


//Will be used if nothing else is found -----------------------------
app.all('/request', function (req, res, next) {
	res.sendStatus(httpStatus.NOT_FOUND)
})


//Used with the HTML form -------------------------------
app.post('/form', function(req, res) {
    res.send('Hello, form POST!<br>Posted message: <code>'
	     + req.body.user_message + '</code>');
});

app.listen(port, () => console.log(`Listening on port ${port}!`))
