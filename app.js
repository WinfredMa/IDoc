var path = require('path');
var express = require('express');
var session = require('express-session');
var _ = require('lodash');
var compress = require('compression');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');
var swagger = require('swagger-express');

var config = require('./config');
var apiRouterV1 = require('./router');
var requestLog = require('./middlewares/request_log');
var logger = require('./common/logger');


// 静态文件目录
var staticDir = path.join(__dirname, 'public');
// assets
var assets = {};

var app = express();

/******************* middlewares ***********************/
// Request logger。请求时间
app.use(requestLog);
/******************* middlewares ***********************/

app.use('/public', express.static(staticDir));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(compress());
app.use(session({
    secret: config.session_secret,
    resave: false,
    saveUninitialized: false
}));

app.use(swagger.init(app, {
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    swaggerURL: '/swagger',
    // swaggerJSON: '/api-docs.json',
    swaggerUI: './swaggerUI/public/swagger/',
    basePath: 'http://localhost:3000',
    info: {
        title: 'SHARE Swagger'        
    },
    apis: ['./controller/user.js'],
    middleware: function (req, res) { }
}));

// routes
app.use('/api/', apiRouterV1);

// error handler
app.use(function (err, req, res, next) {
    logger.error(err);
    return res.status(500).send('500 status');
});

app.listen(config.port, function () {
    logger.info('Share listening on port', config.port);
});

module.exports = app;
