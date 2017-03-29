var UserModel = require('../models').User;
var db = require('../db');
var async = require('async');
var _ = require('lodash');
var Tool = require('../common/tools');


exports.list = function (req, res, next) {
    var data = {};
    res.json(Tool.formatSuccessRes(data));
};

exports.create = function (req, res, next) {
    console.log(req.body);
    var data = {};
    res.json(Tool.formatSuccessRes(data));
};

exports.detail = function (req, res, next) {
    var data = {};
    console.log(req.params);
    res.json(Tool.formatSuccessRes(data));
};

exports.comments = function (req, res, next) {
    var data = {};
    res.json(Tool.formatSuccessRes(data));
};

exports.postComment = function(req, res, next){
    var data = {};
    res.json(Tool.formatSuccessRes(data));
}