var PressureModel, db, async, Tool;

PressureModel = require('../models').Pressure;
db = require('../db');
async = require('async');
Tool = require('../common/tools');

exports.create = function(req, res, next) {
    var pressure = new PressureModel(req.body);
    pressure.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(pressure);
        }
    });
};

exports.list = function(req, res, next) {
    PressureModel.find({}, function(err, pressures) {
        if (err) {
            return next(err);
        } else {
            res.json(pressures);
        }
    });
};

exports.detail = function(req, res) {
    res.json(req.pressure);
};

exports.findByID = function(req, res, next, id) {
    PressureModel.findOne({
        _id: id
    }, function(err, pressure) {
        if (err) {
            return next(err);
        } else {
            req.pressure = pressure;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    PressureModel.findByIdAndUpdate(req.pressure._id, req.body, function(err, pressure) {
        if (err) {
            return next(err);
        } else {
            res.json(pressure);
        }
    });
};

exports.delete = function(req, res, next) {
    req.PressureModel.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.pressure);
        }
    });
};