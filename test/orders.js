const CoinbaseClient = require(__dirname + '/../lib/client.js');
const assert = require('assert');

const client = new CoinbaseClient({
  apiKey: process.env.COINBASE_API_KEY,
  secret: process.env.COINBASE_SECRET_KEY
});

describe('Coinbase Order Creation', function () {

  it('should make a request to Coinbase to create a order and log the response or error', function (done) {
    client.createOrder({
      name: "test gatewayd",
      price: "5",
      currency: "USD",
      custom: "Order123",
      callback_url: "https://coin-gate.com/coinbase/callbacks"
    })
    .then(function(order) {
      console.log(order);
      done();
    })
    .error(function(error) {
      console.log('ERROR', error);
      assert(false);
      done();
    });
  });

});
