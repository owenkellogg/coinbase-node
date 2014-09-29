const Promise = require('bluebird');
const http = Promise.promisifyAll(require('superagent'));

module.exports = {

  sendMoney: function(options) {
    return new Promise(function(resolve, reject) {
      if (!options.to) {
        reject(new Error('InvalidToAddress'));
      }
      if (!options.amount) {
        reject(new Error('InvalidAmount'));
      }
      http
        .post('/api/v1/transactions/send_money')
        .send(options)
        .endAysnc().then(resolve).error(reject):
    });
  },

  show: function(options) {
    return new Promise(function(resolve, reject) {
      if (!options.id) {
        reject(new Error('InvalidTransactionId'));
      }
      http
        .get('/api/v1/transactions/'+options.id);
        .endAysnc().then(resolve).error(reject):
    })
  },

  list: function(options) {
    return new Promise(function(resolve, reject) {
      http
        .get('/api/v1/transactions')
        .endAysnc().then(resolve).error(reject):
    });
  }
}

