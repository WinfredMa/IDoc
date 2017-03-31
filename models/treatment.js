/* Doctor Model */
var mongoose, BaseModel, Schema, ObjectId, TreatmentSchema, Patient;

mongoose = require('mongoose');
BaseModel = require("./base_model");
Patient = require('./patient');
Doctor = require('./doctor');
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

TreatmentSchema = new Schema({
    id: {type : ObjectId, index : true},
    name: { type: String },
    amount: { type: String},
    patient: {type : String, ref : 'Patient'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    access_token: {type : String}
});

TreatmentSchema.plugin(BaseModel);
TreatmentSchema.pre('save', function (next) {
    var now = new Date();
    this.updated_at = now;
    next();
});

TreatmentSchema.statics = {
    findByTime: function(time, cb) {
        var timeObj = new Date(time),
            minimumDate, maximumDate, currentHour;
        currentHour = timeObj.getHours();
        if (currentHour <= 10) {
            minimumDate = timeObj.getFullYear() + '-' + (timeObj.getMonth() + 1) + '-' + timeObj.getDate() + ' 00:00:00';
            maximumDate = timeObj.getFullYear() + '-' + (timeObj.getMonth() + 1) + '-' + timeObj.getDate() + ' 10:00:00';

        } else if ((10 < currentHour) && (currentHour <= 17)) {
            minimumDate = timeObj.getFullYear() + '-' + (timeObj.getMonth() + 1) + '-' + timeObj.getDate() + ' 10:00:00';
            maximumDate = timeObj.getFullYear() + '-' + (timeObj.getMonth() + 1) + '-' + timeObj.getDate() + ' 17:00:00';
        } else {
            minimumDate = timeObj.getFullYear() + '-' + (timeObj.getMonth() + 1) + '-' + timeObj.getDate() + ' 17:00:00';
            maximumDate = timeObj.getFullYear() + '-' + (timeObj.getMonth() + 1) + '-' + timeObj.getDate() + ' 23:00:00';
        }

        return this
            .find({'$and': [{'created_at': {'$gt': new Date(minimumDate)}}, {'created_at': {'$lt': new Date(maximumDate)}}]})
            .exec(cb);
    },
    findById: function(id, cb) {
        return this
            .findOne({ _id: id })
            .exec(cb);
    }
}


mongoose.model('Treatment', TreatmentSchema);