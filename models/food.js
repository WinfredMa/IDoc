/* Food model */
var mongoose, BaseModel, Schema, ObjectId, FoodSchema;

mongoose = require('mongoose');
BaseModel = require("./base_model");
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

FoodSchema = new Schema({
    id: {type : ObjectId, index : true},
    name : {type : String},
    amount: {type : String},
    type: {type : String},
    patient: {type : String, ref : 'Patient'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

FoodSchema.plugin(BaseModel);

FoodSchema.pre('save', function (next) {
    var now = new Date();
    this.updated_at = now;
    next();
});

mongoose.model('Food', FoodSchema);