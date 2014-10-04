const requireAll = require('require-all');
const controllers = requireAll(__dirname+'/controllers');
const RequestService = require(__dirname + '/request_service.js');

function CoinbaseClient(options) {
  if (!options.apiKey) {
    throw new Error('InvalidCoinbaseApiKey');
  }
  if (!options.secret) {
    throw new Error('InvalidCoinbaseSecret');
  }
  this.requestService = new RequestService(options);
}

CoinbaseClient.prototype = {
  sendMoney: function(options) {
    /* 
     required:
     - to
     - amount
     optional:
     - notes
     - idem
     */
    return controllers.transactions.sendMoney.call(this, options);
  },
  show: function(options) {
    /*
     optional:
     - account_id
     */
    return controllers.transactions.show.call(this, options)
  },
  createOrder: function(options) {
    /*
     required:
     - name
     - price
     - currency
     optional:
     - custom
     */
    return controllers.orders.create.call(this, options)
  },
  list: function(options) {
    /*
     optional:
     - account_id
     - page
     - limit
     */
    return controllers.transactions.list.call(this, options);
  }
};

module.exports = CoinbaseClient;

