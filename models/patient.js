var mongoose, BaseModel, Schema, ObjectId, _, PatientSchema,
    Examination, Treatment, Food, Activity, Message;

mongoose = require('mongoose');
BaseModel = require('./base_model');
_ = require('lodash');

Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;
Examination = require('./examination');
Treatment = require('./treatment');
Food = require('./food');
Activity = require('./activity');
Message = require('./message')

PatientSchema = new Schema({
    id: {type : ObjectId, index : true},
    name: { type: String },
    avatar: { type: String },
    description: { type: String },
    summary: { type: String },
    gender: { type: String },
    years: {type : Number},
    disease: { type: String },
    job: { type: String },
    address: { type: String },
    email: { type: String },
    tel: { type: String },
    examinations: [{
        id : {type :ObjectId , ref : Examination},
        name:{type : String}
    }],
    treatments: [{
        id : {type :ObjectId , ref : Treatment},
        name:{type : String}
    }],
    food: [{
        id : {type :ObjectId , ref : Food},
        name:{type : String}
    }],
    activities: [{
        id : {type :ObjectId , ref : Activity},
        name:{type : String}
    }],
    messages: [{
        id : {type :ObjectId , ref : Message},
        name:{type : String}
    }],
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