/* Activity Model */
var mongoose, BaseModel, Schema, ObjectId, _, ActivitySchema;

mongoose = require('mongoose');
BaseModel = require("./base_model");
_ = require('lodash');
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;


ActivitySchema = new Schema({
    id: {type : ObjectId, index : true},
    total_steps: {type : String},
    total_cals: {type : String},
    total_distance: {type : String},
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    access_token: {type : String}
});

ActivitySchema.plugin(BaseModel);
ActivitySchema.pre('save', function (next) {
    var now = new Date();
    this.update_at = now;
    next();
});

mongoose.model('Activity', ActivitySchema);