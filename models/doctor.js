/* Doctor Model */
var mongoose, BaseModel, Schema, ObjectId, _, DoctorSchema;

mongoose = require('mongoose');
BaseModel = require("./base_model");
_ = require('lodash');
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;


DoctorSchema = new Schema({
    id: {type : ObjectId, index : true},
    name: { type: String },
    avatar: { type: String },
    description: { type: String },
    summary: { type: String },
    gender: { type: String },
    years: {type : Number},
    title: { type: String },
    address: { type: String },
    email: { type: String },
    tel: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    access_token: {type : String}
});

DoctorSchema.plugin(BaseModel);
DoctorSchema.pre('save', function (next) {
    var now = new Date();
    this.updated_at = now;
    next();
});

mongoose.model('Doctor', DoctorSchema);