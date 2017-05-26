/**
 * 
 */
var Conversation = require('../services/bluemix');


exports.startConversation = function (req, res, next) {
    // var input = req.body.input;
    Conversation.startConversation(function(err, result){
        if(err) {
            res.json({ error: err });
        } else {
            res.json(result);
        }
    });
};

exports.processConversation = function (req, res, next) {
    var input = req.body.input;
    Conversation.processConversation(input,req.body.context, function(err, result){
        if(err) {
            res.json({ error: err });
        } else {
            res.json(result);
        }
    });
};