var UserModel = require('../models').User;
var db = require('../db');
var async = require('async');
var _ = require('lodash');
var Tool = require('../common/tools');

/**
 * @swagger
 * resourcePath: /user
 * description: All about API
 */



/**
 * @swagger
 * path: /api/user
 * operations:
 *   -  httpMethod: GET
 *      summary: Get user information
 *      notes: Returns a user based on username
 *      responseClass: User
 *      nickname: login
 */

/**
 * @swagger
 * models:
 *   User:
 *     id: User
 *     properties:
 *       first_name:
 *         type: String
 *       last_name:
 *         type: String
 *       avatar:
 *         type: String   
 *       email:
 *          type : String 
 */

/**
 * @swaggerDemo
 * path: /user
 * operations:
 *   -  httpMethod: GET
 *      summary: Get user information
 *      notes: Returns a user based on username
 *      responseClass: User
 *      nickname: login
 *      consumes: 
 *        - text/html
 *      parameters:
 *        - name: username
 *          description: Your username
 *          paramType: query
 *          required: true
 *          dataType: string
 *        - name: password
 *          description: Your password
 *          paramType: query
 *          required: true
 *          dataType: string
 */
exports.info = function (req, res, next) {
    // db.User.init({
    //     first_name : "Barry",
    //     last_name : "Li",
    //     avatar : "http://www.baidu.com"
    // }, function(){});
    res.json(Tool.formatSuccessRes({}));
};


/**
 * @swagger
 * path: /api/login
 * operations:
 *   -  httpMethod: POST
 *      summary: Get user information
 *      notes: Returns a user based on username
 *      responseClass: User
 *      nickname: login
 *      consumes: 
 *        - text/html
 *      parameters:
 *        - name: username
 *          description: Your username
 *          paramType: query
 *          required: true
 *          dataType: string
 *        - name: password
 *          description: Your password
 *          paramType: query
 *          required: true
 *          dataType: string
 */
exports.signIn = function (req, res, next) {
    var data = req.body;
    console.log(req.body);
    //verify
    db.User.verifyEmailAndPass(data.email, data.password, function (err, doc) {
        if (!doc) {
            return res.json(Tool.formatFailureRes({
            }));
        } else {
            var userId = doc._id;
            //after verify
            var token = new Buffer(userId + ":" + data.email).toString('base64');            
            res.json(Tool.formatSuccessRes({
                token: "Basic " + token,
                email: data.email,
                userId : userId
            }));
        }
    });
};

/**
 * 
 */
exports.favoriteTag = function (req, res, next) {
    console.log(req.body);
    var user = req.session.user;
    var tags = [];
    var requestBody = req.body;
    // asyc.each(requestBody, function(item){
    //     console.log(item);
    //     db.Tag.findOne
    // });
    // db.User.favoriteTags(user.userId, );
    res.json(Tool.formatSuccessRes({}));
};
