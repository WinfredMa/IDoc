var moment = require('moment');

// 格式化时间
exports.formatDate = function (date, friendly) {
  date = moment(date);

  if (friendly) {
    return date.fromNow();
  } else {
    return date.format('YYYY-MM-DD HH:mm');
  }

};


exports.formatSuccessRes = function (data, message) {
  // return JSON.stringify({
  //   status : "success",
  //   message : message ? message : "",
  //   data : data
  // });
  return {
    status: "success",
    message: message ? message : "",
    data: data
  };
};

exports.formatFailureRes = function (data, message) {
  // return JSON.stringify({
  //   status: "failure",
  //   message: message ? message : "",
  //   data: data
  // });
  return {
    status: "failure",
    message: message ? message : "",
    data: data
  };
};