const controllers = require(__dirname+'/controllers');

function CoinbaseClient(options) {
  if (!options.apiKey) {
    throw new Error('InvalidCoinbaseApiKey');
  }
  if (!options.secret) {
    throw new Error('InvalidCoinbaseSecret');
  }
  this.apiKey = options.apiKey;
  this.secret = options.sercret;
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
    controllers.transactions.sendMoney.call(this, options);
  },
  show: function(options) {
    /*
    optional:
      - account_id
    */
    controllers.transactions.show.call(this, options);
  },
  list: function(options) {
    /*
    optional:
      - account_id
      - page
      - limit
    */
    controllers.transactions.list.call(this, options);
  }
}

module.exports = CoinbaseClient;

