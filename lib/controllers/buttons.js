const Promise = require('bluebird');
const http = Promise.promisifyAll(require('superagent'));
const _ = require('lodash');

module.exports = {

  create: function(options) {
    var _this = this;
    var url = 'https://coinbase.com/api/v1/buttons';
    return new Promise(function(resolve, reject) {
      var button = _.extend({
        custom_secure: true
      }, options);


      button.price_string = options.price.toString();
      button.price_currency_iso = button.currency;
      /*
      if(!options.transaction || !options.transaction.to || !options.transaction.amount_string || !options.transaction.amount_currency_iso) {
        reject(new Error('InvalidTransaction'));
      }
      */
      var body = { button: button }
      var headers = _this.requestService.generateHeaders(url, body);
      http
        .post(url)
        .set(headers)
        .send(body)
        .endAsync().then(function(response) {
          if (!response.body.success) {
            reject(response.body);
          }
          resolve(response.body);
        })
        .error(reject);
    });
  }

};

