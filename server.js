var http = require('http')
var express = require('express')
var routes = require('./routes')
var user = require('./routes/user')
var path = require('path')

var favicon = require('serve-favicon')
var logger = require('morgan')
var methodOverride = require('method-override')
var session = require('express-session')
var bodyParser = require('body-parser')
var multer = require('multer')
var errorHandler = require('errorhandler')

var app = express()

// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(favicon(path.join(__dirname, '/public/favicon.ico')))
app.use(logger('dev'))
app.use(methodOverride())
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(multer())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', routes.index)
app.get('/users', user.list)

// error handling middleware should be loaded after the loading the routes
if (app.get('env') === 'development') {
  app.use(errorHandler())
}

var server = http.createServer(app)
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})

/* Received Cannot Get response 
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json());

app.use(function (req, res, next) {
	console.log(req.body)
	next()
})

app.listen(3000); */

/*var express = require('express');
var app = express();

if (app.get('env') === 'development) {
	app.use(express.errorHandler())
}

app.get(function(){
	app.use(express.bodyParser());
});

app.post('', function(req, res){
	console.log(req.body);
	res.send("ok");
});

app.listen(3000);
console.log('listening to http://localhost:3000');

var request = require("request")
request.post({
	url: "https://www.opentdb.com/api.php?amount=10&difficulty=easy",
	headers: {
		'Content-type': 'application/json'
	},
	body: JSON.stringify({
		a: 1,
		b: 2,
		c: 3
	})
}, function(error, response, body){
	console.log(body);
});*/


/*
var url = "https://www.opentdb.com/api.php?amount=10&difficulty=easy"

request({
	url: url,
	json: true
}, function (error, response, body) {
	if (!error && response.statusCode === 200) {
	console.log(body)
	}
});*/

