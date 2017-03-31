/* Activity Model */
var mongoose, BaseModel, Schema, ObjectId, ActivitySchema;

mongoose = require('mongoose');
BaseModel = require("./base_model");
Schema = mongoose.Schema;
ObjectId = mongoose.Schema.Types.ObjectId;

ActivitySchema = new Schema({
    id: {type : ObjectId, index : true},
    total_steps: {type : String},
    total_cals: {type : String},
    total_distance: {type : String},
    patient: {type : String, ref : 'Patient'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    access_token: {type : String}
});

ActivitySchema.plugin(BaseModel);
ActivitySchema.pre('save', function (next) {
    var now = new Date();
    this.updated_at = now;
    next();
});
ActivitySchema.statics = {
    findLatest: function(cb) {
        return this
          .find()
          .sort({$natural : -1})
          .limit(1)
          .exec(cb)
    },
    findById: function(id, cb) {
        return this
          .findOne({_id: id})          
          .exec(cb)
    }
};
mongoose.model('Activity', ActivitySchema);