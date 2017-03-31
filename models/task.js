/* Food model */
var mongoose, BaseModel, Schema, ObjectId, TaskSchema;

mongoose = require('mongoose');
BaseModel = require("./base_model");
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

TaskSchema = new Schema({
    id: {type : ObjectId, index : true},
    name : {type : String},
    description: {type : String},
    doctor: {type : String, ref : 'Doctor'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

TaskSchema.plugin(BaseModel);

TaskSchema.pre('save', function (next) {
    var now = new Date();
    this.updated_at = now;
    next();
});

mongoose.model('Task', TaskSchema);