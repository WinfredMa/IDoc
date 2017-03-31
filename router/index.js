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
router.get('/activity/latest', controllerFactory.Activity.latestActivity);
router.post('/activity', controllerFactory.Activity.create);
router.post('/activity/:activityId', controllerFactory.Activity.update);
router.get('/activity/:activityId', controllerFactory.Activity.read);
router.delete('/activity/:activityId', controllerFactory.Activity.delete);
router.param('activityId', controllerFactory.Activity.detail);

// Food
router.get('/food', controllerFactory.Food.list);
router.post('/food', controllerFactory.Food.create);
router.post('/food/:foodId', controllerFactory.Food.update);
router.get('/food/:foodId', controllerFactory.Food.detail);
router.delete('/food/:foodId', controllerFactory.Food.delete);
router.param('foodId', controllerFactory.Food.findByID);

// Treatment
router.get('/treatment', controllerFactory.Treatment.list);
router.get('/treatment/timeRange', controllerFactory.Treatment.findByTime);
router.post('/treatment', controllerFactory.Treatment.create);
router.post('/treatment/:treatmentId', controllerFactory.Treatment.update);
router.get('/treatment/:treatmentId', controllerFactory.Treatment.detail);
router.delete('/treatment/:treatmentId', controllerFactory.Treatment.delete);
router.param('treatmentId', controllerFactory.Treatment.findByID);

// Mornitor: Glucose
router.get('/glucose', controllerFactory.Glucose.list);
router.post('/glucose', controllerFactory.Glucose.create);
router.post('/glucose/:glucoseId', controllerFactory.Glucose.update);
router.get('/glucose/:glucoseId', controllerFactory.Glucose.detail);
router.delete('/glucose/:glucoseId', controllerFactory.Glucose.delete);
router.param('glucoseId', controllerFactory.Glucose.findByID);

// Mornitor: Pressure
router.get('/pressure', controllerFactory.Pressure.list);
router.post('/pressure', controllerFactory.Pressure.create);
router.post('/pressure/:pressureId', controllerFactory.Pressure.update);
router.get('/pressure/:pressureId', controllerFactory.Pressure.detail);
router.delete('/pressure/:pressureId', controllerFactory.Pressure.delete);
router.param('pressureId', controllerFactory.Pressure.findByID);

// Mornitor: Heart Rate
router.get('/heartRate', controllerFactory.HeartRate.list);
router.post('/heartRate', controllerFactory.HeartRate.create);
router.post('/heartRate/:heartRateId', controllerFactory.HeartRate.update);
router.get('/heartRate/:heartRateId', controllerFactory.HeartRate.detail);
router.delete('/heartRate/:heartRateId', controllerFactory.HeartRate.delete);
router.param('heartRateId', controllerFactory.HeartRate.findByID);

// Mornitor: Weight
router.get('/weight', controllerFactory.Weight.list);
router.post('/weight', controllerFactory.Weight.create);
router.post('/weight/:weightId', controllerFactory.Weight.update);
router.get('/weight/:weightId', controllerFactory.Weight.detail);
router.delete('/weight/:weightId', controllerFactory.Weight.delete);
router.param('weightId', controllerFactory.Weight.findByID);

// Patient
router.get('/patient', controllerFactory.Patient.list);
router.post('/patient', controllerFactory.Patient.create);
router.post('/patient/:patientId', controllerFactory.Patient.update);
router.get('/patient/:patientId', controllerFactory.Patient.detail);
router.delete('/patient/:patientId', controllerFactory.Patient.delete);
router.param('patientId', controllerFactory.Patient.findByID);

module.exports = router;