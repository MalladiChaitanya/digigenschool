var mongoose = require('mongoose');
var mongodbURL = 'mongodb://digigen:digigen123@ds217078.mlab.com:17078/digigen';
var mongodbOptions = {};
mongoose.Promise = require('bluebird');

// MongoDB connection
mongoose.connect(mongodbURL, mongodbOptions, function (err, res) {
    if (err) {
        console.log('Connection refused to ' + mongodbURL);
        console.log(err);
    } else {
        console.log('Connection successful to: ' + mongodbURL);
    }
});

// Instantiate Schema
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

// User schema
var User = new Schema({
    username: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    grade: { type: String, required: true },
    section: { type: String, required: true },
    rnumber: { type: Number },
    password: { type: String, required: true }
});

//Lessons Schema
var Lessons = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: Array },
    assignments: { type: Array },
    username: { type: String, required: true }
});

//Assignments Schema
var Assignments = new Schema({
    lessonid: { type: String, required: true },
    username: { type: String, required: true },
    like: { type: Array, required: true },
    dislike: { type: Array, required: true },
    description: { type: String, required: true },
});

// Define Models
var userModel = mongoose.model('User', User);
var lessonsModel = mongoose.model('Lessons', Lessons);
var assignmentsModel = mongoose.model('Assignments', Assignments);

// Export Models
exports.userModel = userModel;
exports.lessonsModel = lessonsModel;
exports.assignmentsModel = assignmentsModel;
