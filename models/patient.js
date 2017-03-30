var mongoose, BaseModel, Schema, ObjectId, PatientSchema;

mongoose = require('mongoose');
BaseModel = require('./base_model');

Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

PatientSchema = new Schema({
    id: {type : ObjectId, index : true},
    name: { type: String },
    password: { type: String},
    avatar: { type: String },
    description: { type: String },
    summary: { type: String },
    gender: { type: String },
    age: {type : String},
    disease: { type: String },
    job: { type: String },
    address: { type: String },
    email: { type: String },
    tel: { type: String },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    access_token: {type : String}
});

PatientSchema.plugin(BaseModel);

PatientSchema.pre('save', function (next) {
    var now = new Date();
    this.update_at = now;
    next();
});

mongoose.model('Patient', PatientSchema);