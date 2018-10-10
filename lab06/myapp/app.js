const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello!'))

app.get('/request', (req, res) => res.send('This is an example of the get method.'))

app.post('/request', function (req, res) {
	res.send('Got a POST request')
})

app.put('/request', function (req, res) {
	res.send('Got a PUT request')
})

app.delete('/request', function (req, res) {
	res.send('Got a DELETE request')
})

app.head('/request', function (req, res) {
	res.send('This is HEAD request, I think')
})

app.listen(port, () => console.log(`Listening on port ${port}!`))