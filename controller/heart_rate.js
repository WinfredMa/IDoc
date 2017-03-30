var HeartRateModel, db, async, Tool;

HeartRateModel = require('../models').HeartRate;
db = require('../db');
async = require('async');
Tool = require('../common/tools');

exports.create = function(req, res, next) {
    var heartRate = new HeartRateModel(req.body);
    heartRate.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(heartRate);
        }
    });
};

exports.list = function(req, res, next) {
    HeartRateModel.find({}, function(err, heartRates) {
        if (err) {
            return next(err);
        } else {
            res.json(heartRates);
        }
    });
};

exports.detail = function(req, res) {
    res.json(req.heartRate);
};

exports.findByID = function(req, res, next, id) {
    HeartRateModel.findOne({
        _id: id
    }, function(err, heartRate) {
        if (err) {
            return next(err);
        } else {
            req.heartRate = heartRate;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    HeartRateModel.findByIdAndUpdate(req.heartRate._id, req.body, function(err, heartRate) {
        if (err) {
            return next(err);
        } else {
            res.json(heartRate);
        }
    });
};

exports.delete = function(req, res, next) {
    req.heartRate.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.heartRate);
        }
    });
};





