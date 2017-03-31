/* HeartRate model */
var mongoose, BaseModel, Schema, ObjectId, HeartRateSchema;

mongoose = require('mongoose');
BaseModel = require("./base_model");
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

HeartRateSchema = new Schema({
    id: {type : ObjectId, index : true},
    amount: {type : String},
    patient: {type : String, ref : 'Patient'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

HeartRateSchema.plugin(BaseModel);

HeartRateSchema.pre('save', function (next) {
    var now = new Date();
    this.updated_at = now;
    next();
});

mongoose.model('HeartRate', HeartRateSchema);