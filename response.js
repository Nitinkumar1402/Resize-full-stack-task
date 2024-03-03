const success = (message, data, statusCode) => {
    return { message: message, data: data, code: statusCode };
  };
  
  module.exports = { success };