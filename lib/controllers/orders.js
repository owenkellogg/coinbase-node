const Promise = require('bluebird');
const http = Promise.promisifyAll(require('superagent'));
const _ = require('lodash');

module.exports = {

  create: function create(options) {
    var _this = this;
    var url = 'https://coinbase.com/api/v1/orders';
    return new Promise(function(resolve, reject) {
      var order = _.extend({
        custom_secure: true
      }, options);


      order.price_string = options.price.toString();
      order.price_currency_iso = order.currency;
      /*
      if(!options.transaction || !options.transaction.to || !options.transaction.amount_string || !options.transaction.amount_currency_iso) {
        reject(new Error('InvalidTransaction'));
      }
      */
      var body = { button: order }
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

