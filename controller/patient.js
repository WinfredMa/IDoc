var PatientModel;

PatientModel = require('../models').Patient;

exports.create = function(req, res, next) {
    var patient = new PatientModel(req.body);
    patient.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(patient);
        }
    });
};

exports.list = function(req, res, next) {
    PatientModel.find({}, function(err, patients) {
        if (err) {
            return next(err);
        } else {
            res.json(patients);
        }
    });
};

exports.detail = function(req, res) {
    res.json(req.patient);
};

exports.findByID = function(req, res, next, id) {
    PatientModel.findOne({
        _id: id
    }, function(err, patient) {
        if (err) {
            return next(err);
        } else {
            req.patient = patient;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    PatientModel.findByIdAndUpdate(req.patient._id, req.body, function(err, patient) {
        if (err) {
            return next(err);
        } else {
            res.json(patient);
        }
    });
};

exports.delete = function(req, res, next) {
    req.patient.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.patient);
        }
    });
};





