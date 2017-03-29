var path = require('path');

var config = {  
  debug: true,

  name: 'Share',
  description: '',  

  host: 'localhost',
  port: 3000,
  db: 'mongodb://127.0.0.1/shareknoledge',

  session_secret: 'share_secret'  
};

module.exports = config;