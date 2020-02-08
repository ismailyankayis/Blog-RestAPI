

var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    Article = require('./api/models/Article'),
    Category = require('./api/models/Category'),
    bodyParser = require('body-parser');

var cors = require('cors');

app.use(cors());


// mongoose instance connection url
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Seed DB
require('./SeedDB')();

require('./api/routes/todoListRoutes')(app);
// Article Route
require('./api/routes/ArticleRoutes')(app);
// Category Route
require('./api/routes/CategoryRoutes')(app);

app.listen(port);

console.log('todo list restful api server started on: ' + port);