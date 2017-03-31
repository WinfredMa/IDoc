/* Glucose model */
var mongoose, BaseModel, Schema, ObjectId, GlucoseSchema;

mongoose = require('mongoose');
BaseModel = require("./base_model");
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

GlucoseSchema = new Schema({
    id: {type : ObjectId, index : true},
    amount: {type : String},
    patient: {type : String, ref : 'Patient'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

GlucoseSchema.plugin(BaseModel);

GlucoseSchema.pre('save', function (next) {
    var now = new Date();
    this.updated_at = now;
    next();
});

mongoose.model('Glucose', GlucoseSchema);