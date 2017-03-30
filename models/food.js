/* Food model */
var mongoose, BaseModel, Schema, ObjectId, FoodSchema;

mongoose = require('mongoose');
BaseModel = require("./base_model");
Patient = require('./patient');
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

FoodSchema = new Schema({
    id: {type : ObjectId, index : true},
    name : {type : String},
    amount: {type : String},
    type: {type : String},
    patient: {
        id : {type :ObjectId , ref : Patient},
        name:{type : String}
    },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
});

FoodSchema.plugin(BaseModel);

FoodSchema.pre('save', function (next) {
    var now = new Date();
    this.update_at = now;
    next();
});

mongoose.model('Food', FoodSchema);