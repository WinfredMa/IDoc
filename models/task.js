/* Food model */
var mongoose, BaseModel, Schema, Doctor, ObjectId, TaskSchema;

mongoose = require('mongoose');
BaseModel = require("./base_model");
Doctor = require('./doctor');
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

TaskSchema = new Schema({
    id: {type : ObjectId, index : true},
    name : {type : String},
    description: {type : String},
    doctor: {
        id : {type : ObjectId, ref : Doctor},
        name : {type : String}
    },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
});

TaskSchema.plugin(BaseModel);

TaskSchema.pre('save', function (next) {
    var now = new Date();
    this.update_at = now;
    next();
});

mongoose.model('Task', TaskSchema);