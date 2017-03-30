/* Examination Model */
var mongoose, BaseModel, Schema, ObjectId, ExaminationSchema, Doctor;

mongoose = require('mongoose');
BaseModel = require('./base_model');
Doctor = require('./doctor')
Patient = require('./patient');
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;
ExaminationSchema = new Schema({
    id: {type : ObjectId, index : true},
    name: { type: String },
    doctor: {
        id : {type : ObjectId, ref : Doctor},
        name : {type : String}
    },
    patient: {
        id : {type :ObjectId , ref : Patient},
        name:{type : String}
    },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    access_token: {type : String}
});

ExaminationSchema.plugin(BaseModel);
ExaminationSchema.pre('save', function (next) {
    var now = new Date();
    this.update_at = now;
    next();
});

mongoose.model('Examination', ExaminationSchema);