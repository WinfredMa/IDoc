/* Examination Model */
var mongoose, BaseModel, Schema, ObjectId, ExaminationSchema;

mongoose = require('mongoose');
BaseModel = require('./base_model');
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;
ExaminationSchema = new Schema({
    id: {type : ObjectId, index : true},
    name: { type: String },
    doctor: {type : String, ref : 'Doctor'},
    patient: {type : String, ref : 'Patient'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    access_token: {type : String}
});

ExaminationSchema.plugin(BaseModel);
ExaminationSchema.pre('save', function (next) {
    var now = new Date();
    this.updated_at = now;
    next();
});

mongoose.model('Examination', ExaminationSchema);
