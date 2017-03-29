/* Doctor Model */
var mongoose, BaseModel, Schema, ObjectId, _, TreatmentSchema, Patient;

mongoose = require('mongoose');
BaseModel = require("./base_model");
_ = require('lodash');
Patient = require('./patient');
Doctor = require('./doctor');
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

TreatmentSchema = new Schema({
    id: {type : ObjectId, index : true},
    name: { type: String },
    amount: {},
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    access_token: {type : String}
});

TreatmentSchema.plugin(BaseModel);
TreatmentSchema.pre('save', function (next) {
    var now = new Date();
    this.update_at = now;
    next();
});

mongoose.model('Treatment', TreatmentSchema);