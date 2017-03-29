var express = require('express');
var router = express.Router();

var controllerFactory = require('../controller');

//登录

router.all("*", function (req, res, next) {
    var basic = req.headers['authorization'] || '';
    console.log(basic);
    var basicString = new Buffer(basic.substring(6,basic.length), 'base64').toString().split(':');
    console.log(basicString);
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Authorization, Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        return res.end();
    } else {
        var userId = basicString[0];
        var email = basicString[1];

        res.setHeader("Content-Type", "application/json;charset='utf-8'");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Authorization");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        var user = {
            id: userId,
            email: email
        };
        req.session.user = user;
        return next();
    }
});

// Activity
router.get('/activity', controllerFactory.Activity.list);
router.post('/activity', controllerFactory.Activity.create);
router.post('/activity/:activityId', controllerFactory.Activity.update);
router.get('/activity/:activityId', controllerFactory.Activity.read);
router.param('activityId', controllerFactory.Activity.detail);

module.exports = router;