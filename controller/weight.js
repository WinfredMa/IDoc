var WeightModel, db, async, Tool;

WeightModel = require('../models').Weight;
db = require('../db');
async = require('async');
Tool = require('../common/tools');

exports.create = function(req, res, next) {
    var weight = new WeightModel(req.body);
    weight.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(weight);
        }
    });
};

exports.list = function(req, res, next) {
    WeightModel.find({}, function(err, weights) {
        if (err) {
            return next(err);
        } else {
            res.json(weights);
        }
    });
};

exports.detail = function(req, res) {
    res.json(req.weight);
};

exports.findByID = function(req, res, next, id) {
    WeightModel.findOne({
        _id: id
    }, function(err, weight) {
        if (err) {
            return next(err);
        } else {
            req.weight = weight;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    WeightModel.findByIdAndUpdate(req.weight._id, req.body, function(err, weight) {
        if (err) {
            return next(err);
        } else {
            res.json(weight);
        }
    });
};

exports.delete = function(req, res, next) {
    req.weight.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.weight);
        }
    });
};
