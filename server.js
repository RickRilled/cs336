/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var MONGO_PASSWORD = 'bjarne1'

var APP_PATH = path.join(__dirname, 'dist');

MongoClient.connect('mongodb://cs336:bjarne1@ds155203.mlab.com:55203/ril2-cs336', function(err, client){
	if (err) throw err;

    var db = client;

    // Additional middleware which will set headers that we need on each request.
    app.use('/', express.static(APP_PATH){
        // Set permissive CORS header - this allows this server to be used only as
        // an API server in conjunction with something like webpack-dev-server.
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Disable caching so we'll always get the latest comments.
        res.setHeader('Cache-Control', 'no-cache');
        next();
    });

    app.get('/api/comments', function(req, res) {
        var collection = db.collection('commentCollection');

        collection.find({}).toArray(function(err, docs) {
            res.json(docs);
        });      
    });

    app.post('/api/comments', function(req, res) {
        var collection = db.collection('commentCollection');

        var newComment = {
            id: Date.now(),
            author: req.body.author,
            text: req.body.text,
        };

        collection.insertOne(newComment, function(err, result) {
            if (err) throw err;
        });

    });

    app.use('*', express.static(APP_PATH));

    app.listen(app.get('port'), function() {
        console.log('Server started: http://localhost:' + app.get('port') + '/');
    });


    db.collection('commentCollection').find().toArray(function (err, result) {
        if (err) throw err;

        console.log(result);
    })
});



