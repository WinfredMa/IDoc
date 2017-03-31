/* Pressure model */
var mongoose, BaseModel, Schema, ObjectId, PressureSchema;

mongoose = require('mongoose');
BaseModel = require("./base_model");
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

PressureSchema = new Schema({
    id: {type : ObjectId, index : true},
    diastolic: {type: String},
    systolic: {type: String},
    patient: {type : String, ref : 'Patient'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

PressureSchema.plugin(BaseModel);

PressureSchema.pre('save', function (next) {
    var now = new Date();
    this.updated_at = now;
    next();
});

mongoose.model('Pressure', PressureSchema);