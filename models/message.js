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
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
});

MessageSchema.plugin(BaseModel);

MessageSchema.pre('save', function (next) {
    var now = new Date();
    this.update_at = now;
    next();
});

mongoose.model('Message', MessageSchema);