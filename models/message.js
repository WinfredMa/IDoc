var mongoose, BaseModel, Schema, _, ObjectId, MessageSchema;

mongoose = require('mongoose');
BaseModel = require("./base_model");
_ = require('lodash');
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

MessageSchema = new Schema({
    id: {type : ObjectId, index : true},
    message : {type : String},
    from: {type : String},
    to : {type : String},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

MessageSchema.plugin(BaseModel);

MessageSchema.pre('save', function (next) {
    var now = new Date();
    this.updated_at = now;
    next();
});

mongoose.model('Message', MessageSchema);