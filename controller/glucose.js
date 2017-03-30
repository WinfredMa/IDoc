var GlucoseModel, db, async, Tool;

GlucoseModel = require('../models').Glucose;
db = require('../db');
async = require('async');
Tool = require('../common/tools');

exports.create = function(req, res, next) {
    var glucose = new GlucoseModel(req.body);
    glucose.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(glucose);
        }
    });
};

exports.list = function(req, res, next) {
    GlucoseModel.find({}, function(err, glucoses) {
        if (err) {
            return next(err);
        } else {
            res.json(glucoses);
        }
    });
};

exports.detail = function(req, res) {
    res.json(req.glucose);
};

exports.findByID = function(req, res, next, id) {
    GlucoseModel.findOne({
        _id: id
    }, function(err, glucose) {
        if (err) {
            return next(err);
        } else {
            req.glucose = glucose;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    GlucoseModel.findByIdAndUpdate(req.glucose._id, req.body, function(err, glucose) {
        if (err) {
            return next(err);
        } else {
            res.json(glucose);
        }
    });
};

exports.delete = function(req, res, next) {
    req.glucose.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.glucose);
        }
    });
};





