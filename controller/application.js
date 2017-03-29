var UserModel = require('../models').User;
var db = require('../db');
var async = require('async');
var _ = require('lodash');
var Tool = require('../common/tools');

exports.home = function (req, res, next) {
    var data = [
        {
            id: 123123,
            type: 1,//1:topic,2:roundtable,3:webniar
            name: "Swift 3.0", //topic title, roundtable name , webniar name
            description : "Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
            sender: {
                id: 1,
                name: "Walter Garcia",
                title: "Senior Associate",
                avatar: "http://wefwefwef"
            },
            tags: [{
                id : 1,
                image : "fff",
                name : "SAP"
            }],
            duration: 1,
            resources: [
                {
                    type : 1,//1 : image, 2 : video
                    path : ""
                }
            ],
            favoriteCount: 0,
            commentsCount: 1,
            postData: "2017/02/13 10:00",
            isFollowed: false
        }
    ];
    console.log(req.session.user);
    res.json(Tool.formatSuccessRes(data));
};

exports.tags = function (req, res, next) {
    var dataResult = [{
        id: 1,
        name: "SAP",
        image : ""
    }];    
    // db.User.init({
    //     first_name : "Barry",
    //     last_name : "Li",
    //     avatar : "http://olbadk9hq.bkt.clouddn.com/u=3799263855,2164992989&fm=23&gp=0.jpg",
    //     email : "barryli@irace.com",
    //     password : "shareknowledge",
    //     title : "god",
    //     signature : "I am who I am"
    // }, function(err,doc){console.log(err); console.log(doc)});
    res.json(Tool.formatSuccessRes(dataResult));
};