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

mongoose.model('Treatment', TreatmentSchema);