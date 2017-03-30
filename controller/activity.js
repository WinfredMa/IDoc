var ActivityModel;

ActivityModel = require('../models').Activity;

exports.create = function(req, res, next) {
    var activity = new ActivityModel(req.body);
    activity.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(activity);
        }
    });
};

exports.list = function(req, res, next) {
    ActivityModel.find({}, function(err, activities) {
        if (err) {
            return next(err);
        } else {
            res.json(activities);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.activity);
};

exports.detail = function(req, res, next, id) {
    ActivityModel.findOne({
        _id: id
    }, function(err, activity) {
        if (err) {
            return next(err);
        } else {
            req.activity = activity;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    ActivityModel.findByIdAndUpdate(req.activity._id, req.body, function(err, activity) {
        if (err) {
            return next(err);
        } else {
            res.json(activity);
        }
    });
};

exports.delete = function(req, res, next) {
    req.activity.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.activity);
        }
    });
};





