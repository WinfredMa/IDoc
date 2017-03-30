var FoodModel, db, async, _, Tool;

FoodModel = require('../models').Food;
db = require('../db');
async = require('async');
Tool = require('../common/tools');

exports.create = function(req, res, next) {
    var food = new FoodModel(req.body);
    food.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(food);
        }
    });
};

exports.list = function(req, res, next) {
    FoodModel.find({}, function(err, food) {
        if (err) {
            return next(err);
        } else {
            res.json(food);
        }
    });
};

exports.detail = function(req, res) {
    res.json(req.food);
};

exports.findByID = function(req, res, next, id) {
    FoodModel.findOne({
        _id: id
    }, function(err, food) {
        if (err) {
            return next(err);
        } else {
            req.food = food;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    FoodModel.findByIdAndUpdate(req.food._id, req.body, function(err, food) {
        if (err) {
            return next(err);
        } else {
            res.json(food);
        }
    });
};

exports.delete = function(req, res, next) {
    req.food.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.food);
        }
    });
};





