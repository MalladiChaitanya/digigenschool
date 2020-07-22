var db = require('../database-config/mongodb.js');

exports.addAssignment = function (req, res) {
    var data = {};
    console.log(req.body);
    data.username = req.body.username;
    data.like = [];
    data.dislike = [];
    data.description = req.body.description;
    data.lessonid = req.body.lessonid;

    var assignments = new db.assignmentsModel(data);
    assignments.save(function (err, success) {
        if (success) {
            console.log(success);
            db.lessonsModel.findOne({ _id: data.lessonid }, {}, function (qerr, qsuccess) {
                if (qsuccess) {
                    var qdata = qsuccess;
                    qdata["assignments"].push(success._id);
                    var lessons = new db.lessonsModel(qdata);
                    lessons.save(function (qserr, qssuccess) {
                        if (qssuccess) {
                            console.log(qssuccess);
                            data.status = 201;
                            res.json(data);
                        }
                        else {
                            console.log("failure", err);
                            data.status = 403;
                            res.json(data);
                        }
                    });
                } else {
                    console.log("failure", err);
                    data.status = 401;
                    res.json(data);
                }
            });
        }
        else {
            console.log("failure", err);
            data.status = 403;
            res.json(data);
        }
    });
};

exports.getAssignments = function (req, res) {
    var data = {};
    console.log(req.body);
    db.assignmentsModel.find({ lessonid: req.body._id }, {}, function (err, success) {
        if (success) {
            console.log(success);
            data.assignments = success;
            data.status = 201;
            res.json(data);
        } else {
            console.log("failure", err);
            data.status = 401;
            res.json(data);
        }
    }).sort({ _id: -1 });
};

exports.likeAssignment = function (req, res) {
    var data = {};
    console.log("body", req.body);
    db.assignmentsModel.findOne({ _id: req.body['_id'] }, {}, function (err, success) {
        if (success) {
            var adata = success;
            var ausername = req.body['username'];
            if (!(adata['like'].indexOf(ausername) > -1)) {
                adata["like"].push(req.body['username']);
                var assignments = new db.assignmentsModel(adata);
                assignments.save(function (qserr, qssuccess) {
                    if (qssuccess) {
                        console.log(qssuccess);
                        data.message = "User liked it...";
                        data.like = true;
                        data.status = 201;
                        res.json(data);
                    }
                    else {
                        console.log("failure", err);
                        data.status = 403;
                        res.json(data);
                    }
                });
            } else {
                data.message = "User Already liked it...";
                data.like = false;
                res.json(data);
            }
        }
        else {
            console.log(err);
            data.user = {};
            data.status = 403;
            res.json(data);
        }
    });
}

exports.dislikeAssignment = function (req, res) {
    var data = {};
    console.log("body", req.body);
    db.assignmentsModel.findOne({ _id: req.body['_id'] }, {}, function (err, success) {
        if (success) {
            var adata = success;
            var ausername = req.body['username'];
            if (!(adata['dislike'].indexOf(ausername) > -1)) {
                adata["dislike"].push(req.body['username']);
                var assignments = new db.assignmentsModel(adata);
                assignments.save(function (qserr, qssuccess) {
                    if (qssuccess) {
                        console.log(qssuccess);
                        data.message = "User disliked it...";
                        data.dislike = true;
                        data.status = 201;
                        res.json(data);
                    }
                    else {
                        console.log("failure", err);
                        data.status = 403;
                        res.json(data);
                    }
                });
            } else {
                data.message = "User Already disliked it...";
                data.dislike = false
                res.json(data);
            }
        }
        else {
            console.log(err);
            data.user = {};
            data.status = 403;
            res.json(data);
        }
    });
}