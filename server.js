var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var index = require('./routes/index');
var todos = require('./routes/todos');
var bus = require('./routes/bus');

//View Engine
var app = express();
var port = process.env.PORT || 3001;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// use morgan to log requests to the console
app.use(morgan('dev'));

app.use('/', index);
app.use('/api/v1/', todos);
app.use('/api/v2/', bus);

app.listen(port, function () {
  console.log('Server started on port ' + port);
});