var path = require('path');

var config = {  
  debug: true,

  name: 'Share',
  description: '',  

  host: 'localhost',
  port: 3000,
  db: 'mongodb://127.0.0.1/shareknoledge',

  session_secret: 'share_secret',
  bluemix:{
      username: 'f0e519a7-2f05-484d-8781-6b576594db67',
      password: 'CLRA4WEuJoQJ',
      workspace_id : 'a261a529-4478-42dd-8a46-ea48c6de453e'
  }  
};

module.exports = config;