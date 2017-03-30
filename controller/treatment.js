var TreatmentModel, db, async, Tool;

TreatmentModel = require('../models').Treatment;
db = require('../db');
async = require('async');
Tool = require('../common/tools');

exports.create = function(req, res, next) {
    var treatment = new TreatmentModel(req.body);
    treatment.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(treatment);
        }
    });
};

exports.list = function(req, res, next) {
    TreatmentModel.find({}, function(err, treatments) {
        if (err) {
            return next(err);
        } else {
            res.json(treatments);
        }
    });
};

exports.detail = function(req, res) {
    res.json(req.treatment);
};

exports.findByID = function(req, res, next, id) {
    TreatmentModel.findOne({
        _id: id
    }, function(err, treatment) {
        if (err) {
            return next(err);
        } else {
            req.treatment = treatment;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    TreatmentModel.findByIdAndUpdate(req.treatment._id, req.body, function(err, treatment) {
        if (err) {
            return next(err);
        } else {
            res.json(treatment);
        }
    });
};

exports.delete = function(req, res, next) {
    req.treatment.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.treatment);
        }
    });
};





