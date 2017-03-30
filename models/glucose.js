/* Glucose model */
var mongoose, BaseModel, Schema, ObjectId, GlucoseSchema;

mongoose = require('mongoose');
BaseModel = require("./base_model");
Patient = require('./patient');
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

GlucoseSchema = new Schema({
    id: {type : ObjectId, index : true},
    diastolic: {type: String},
    systolic: {type: String},
    patient: {
        id : {type :ObjectId , ref : Patient},
        name:{type : String}
    },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
});

GlucoseSchema.plugin(BaseModel);

GlucoseSchema.pre('save', function (next) {
    var now = new Date();
    this.update_at = now;
    next();
});

mongoose.model('Glucose', GlucoseSchema);