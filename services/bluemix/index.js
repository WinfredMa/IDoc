var ConversationV1 = require('watson-developer-cloud/conversation/v1');
var logger = require('../../common/logger');
var config = require('../../config');

var conversation = new ConversationV1({
    username: config.bluemix.username,
    password: config.bluemix.password,
    version_date: ConversationV1.VERSION_DATE_2017_04_21
    // path: { workspace_id: 'a261a529-4478-42dd-8a46-ea48c6de453e' }
});

exports.startConversation = function (cb) {
    conversation.message({
        workspace_id: 'a261a529-4478-42dd-8a46-ea48c6de453e'
    }, function (err, response) {
        processResponse(err, response, cb);
    });
}

exports.processConversation = function (input, context, cb) {
    var msg = {
        input: { text: input },
        workspace_id: 'a261a529-4478-42dd-8a46-ea48c6de453e'
    }
    if (context && typeof context !== 'function') {
        msg.context = context;
    }
    conversation.message(msg, function (err, response) {
        processResponse(err, response, cb);
    });
}


function processResponse(err, response, cb) {
    if (err) {
        logger.error(err);
        cb(err, {})
    } else {
        var result = JSON.stringify(response, null, 2);
        logger.info("The Conversation Complete : ", result);
        if (response && response.output && response.output.text) {
            return cb(null, {
                context: response.context,
                output: response.output.text
            }
            );
        } else {
            return cb(null, []);
        }
    }
}

