var db = require('../database-config/mongodb.js');

exports.addQuestion = function (req, res) {
    var data = {};
    if (!req.body.assignments) {
        req.body['assignments'] = [];
    }
    console.log(req.body);
    var lessons = new db.lessonsModel(req.body);
    lessons.save(function (err, success) {
        if (success) {
            console.log(success);
            data.status = 201;
            res.json(data);
        }
        else {
            console.log("failure", err);
            data.status = 403;
            res.json(data);
        }
    });
};

exports.getLessons = function (req, res) {
    var data = {};
    db.lessonsModel.find({}, {}, function (err, success) {
        if (success) {
            console.log(success);
            data.lessons = success;
            data.status = 201;
            res.json(data);
        } else {
            console.log("failure", err);
            data.status = 401;
            res.json(data);
        }
    }).sort({ _id: -1 });
};

exports.getMyLessons = function (req, res) {
    var data = {};
    console.log(req.body);
    db.lessonsModel.find({ username: req.body.username }, { _id: 0 }, function (err, success) {
        if (success) {
            console.log(success);
            data.lessons = success;
            data.status = 201;
            res.json(data);
        } else {
            console.log("failure", err);
            data.status = 401;
            res.json(data);
        }
    }).sort({ _id: -1 });
};

exports.getTopLessons = function (req, res) {
    var data = {};
    db.lessonsModel.aggregate([{ "$project": { "length": { "$size": "$assignments" }, "title": 1, "description": 1, "username": 1 } }, { "$sort": { "length": -1 } }], function (err, success) {
        if (success) {
            data.lessons = success;
            data.status = 201;
            res.json(data);
        } else {
            data.status = 401;
            res.json(data);
        }
    })
}

exports.getTopTags = function (req, res) {
    var data = {};
    db.lessonsModel.find({}, {}, function (err, success) {
        if (success) {
            console.log(success);
            data.lessons = success;
            data.status = 201;
            res.json(sortTopTags(data.lessons));
        } else {
            console.log("failure", err);
            data.status = 401;
            res.json(data);
        }
    }).sort({ _id: -1 });
}

function sortTopTags(data) {
    var tag = {};
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].tag.length; j++) {
            var tagName = data[i].tag[j];
            if (!tag[tagName]) {
                tag[tagName] = [];
                tag[tagName].push(data[i]);
            } else {
                tag[tagName].push(data[i]);
            }
        }
    }

    return Object.keys(tag)
        .map(function (k) { return { key: k, value: tag[k] }; })
        .sort(function (a, b) { return b.value.length - a.value.length; });
}