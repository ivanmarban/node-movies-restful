var express		= require('express'),
	logger		= require('morgan'),
	bodyParser	= require('body-parser'),
	mongoose	= require('mongoose'),
	cfg			= require('./config/config');

mongoose.connect('mongodb://'+cfg.mongo.uri+'/'+cfg.mongo.db, function(err, res) {
	if(err) throw err;
	console.log('Connected to MongoDB');
});

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	if (req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});

app.use('/', require('./routes/index'));

app.use(function(req, res, next) {
	res.status(404);
	next();
});

app.set('port', process.env.PORT || cfg.app.port);
var server = app.listen(app.get('port'), function() {
	console.log('RESTful API server running on port: ' + server.address().port);
});