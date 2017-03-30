var mongoose = require('mongoose');
var config = require('../config');
var logger = require('../common/logger')

mongoose.connect(config.db, {
    server: { poolSize: 20 }
}, function (err) {
    if (err) {
        logger.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }
});

// models
require('./activity');
require('./patient');
require('./examination');
require('./treatment');
require('./food');
require('./doctor');
require('./message');
require('./task');
require('./glucose');
require('./pressure');
require('./heart_rate');
require('./weight');
exports.Activity = mongoose.model('Activity');
exports.Patient = mongoose.model('Patient');
exports.Examination = mongoose.model('Examination');
exports.Treatment = mongoose.model('Treatment');
exports.Food = mongoose.model('Food');
exports.Doctor = mongoose.model('Doctor');
exports.Message = mongoose.model('Message');
exports.Task = mongoose.model('Task');
exports.Glucose = mongoose.model('Glucose');
exports.Pressure = mongoose.model('Pressure');
exports.HeartRate = mongoose.model('HeartRate');
exports.Weight = mongoose.model('Weight');