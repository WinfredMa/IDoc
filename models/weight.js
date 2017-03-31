/* Pressure model */
var mongoose, BaseModel, Schema, ObjectId, WeightSchema;

mongoose = require('mongoose');
BaseModel = require('./base_model');
Patient = require('./patient');
Schema = mongoose.Schema;

ObjectId = mongoose.Schema.Types.ObjectId;

WeightSchema = new Schema({
    id: {type : ObjectId, index : true},
    amount: {type : String},
    patient: {type : String, ref : 'Patient'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

WeightSchema.plugin(BaseModel);

WeightSchema.pre('save', function (next) {
    var now = new Date();
    this.updated_at = now;
    next();
});

mongoose.model('Weight', WeightSchema);