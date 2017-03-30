/* HeartRate model */
var mongoose, BaseModel, Schema, ObjectId, HeartRateSchema;

mongoose = require('mongoose');
BaseModel = require("./base_model");
Patient = require('./patient');
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

HeartRateSchema = new Schema({
    id: {type : ObjectId, index : true},
    amount: {type : String},
    patient: {
        id : {type :ObjectId , ref : Patient},
        name:{type : String}
    },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
});

HeartRateSchema.plugin(BaseModel);

HeartRateSchema.pre('save', function (next) {
    var now = new Date();
    this.update_at = now;
    next();
});

mongoose.model('HeartRate', HeartRateSchema);