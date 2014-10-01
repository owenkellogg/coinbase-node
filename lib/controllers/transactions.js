const Promise = require('bluebird');
const http = Promise.promisifyAll(require('superagent'));

module.exports = {

  sendMoney: function(options) {
    var _this = this;
    var url = 'https://coinbase.com/api/v1/transactions/send_money';
    var headers = _this.requestService.generateHeaders(url, options);
    return new Promise(function(resolve, reject) {
      if(!options.transaction || !options.transaction.to || !options.transaction.amount) {
        reject(new Error('InvalidTransaction'));
      }
      http
        .post(url)
        .set(headers)
        .send(options)
        .endAsync().then(function(response) {
          resolve(response.body);
        })
        .error(reject);
    });
  },

  show: function(options) {
    var _this = this;
    var url = 'https://coinbase.com/api/v1/transactions/'+options.id;
    var headers = _this.requestService.generateHeaders(url, undefined);
    return new Promise(function(resolve, reject) {
      if (!options.id) {
        reject(new Error('InvalidTransactionId'));
      }
      http
        .get(url)
        .set(headers)
        .endAsync().then(function(response) {
          resolve(response.body);
        }).error(reject);
    })
  },

  list: function(options) {
    var _this = this;
    var url = 'https://coinbase.com/api/v1/transactions';
    var headers = _this.requestService.generateHeaders(url, undefined);
    return new Promise(function(resolve, reject) {
      http
        .get(url)
        .set(headers)
        .endAsync().then(function(response) {
          resolve(response.body);
        })
        .error(reject);
    });
  }
};

