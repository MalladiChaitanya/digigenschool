// Loading necessary modules
var express = require('express');
var bodyParser = require('body-parser');
var clientSessions = require("client-sessions");


// Instantiate express server
var app = express();

// Using modules for app
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json()); // Body parser to get the data from ajax calls & form data
app.use(bodyParser.urlencoded()); // Body parser to get the URL GET method data
app.use(clientSessions({
    secret: '0GBlJZ9EKBt2Zbi2flRPvztczCewBxXK' // Secret Key
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    next();
});

// Routes to define the call backs
var routes = {};
routes.user = require('./routes/user.js');
routes.lessons = require('./routes/lessons.js');
routes.assignments = require('./routes/assignments.js');
routes.database = require('./database-config/mongodb.js');

// Restful API to get the home page
app.get('/', function (req, res) {
    res.sendfile('/dist/index.html');
});

// Restful API to get the home page
app.get('/dashboard', function (req, res) {
    res.redirect('/');
});

app.get('/signin', function (req, res) {
    res.redirect('/');
});

// Restfull API to login
app.post('/checkLogin', routes.user.login);

// Restful API for user registration
app.post('/register', routes.user.register);

// Restful API for user registration
app.get('/getProfileDetails', routes.user.getProfileDetails);

// Restfull API to logout the user
app.post('/logout', routes.user.logout);

// Restfull API to get the lessons list
app.get('/getLessons', routes.lessons.getLessons);

// Restfull API to get the top lessons list
app.get('/getTopLessons', routes.lessons.getTopLessons);

// Restfull API to get the lessons list
app.get('/getTopTags', routes.lessons.getTopTags);

// Restfull API to get the my lessons list
app.post('/getMyLessons', routes.lessons.getMyLessons);

// Restfull API to get the users list
app.post('/addQuestion', routes.lessons.addQuestion);

// Restfull API to get the users list
app.post('/addAssignment', routes.assignments.addAssignment);

// Restfull API to like a assignment
app.post('/likeAssignment', routes.assignments.likeAssignment);

// Restfull API to like a assignment
app.post('/dislikeAssignment', routes.assignments.dislikeAssignment);

// Restfull API to get the my lessons list
app.post('/getAssignments', routes.assignments.getAssignments);

var server = app.listen((process.env.PORT || 3000));
console.log("DigiGen School Server is Up running on port 3000");
