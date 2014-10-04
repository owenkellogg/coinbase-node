const CoinbaseClient = require(__dirname + '/../lib/client.js');
const assert = require('assert');

const client = new CoinbaseClient({
  apiKey: process.env.COINBASE_API_KEY,
  secret: process.env.COINBASE_SECRET_KEY
});

describe('Coinbase Button Creation', function () {

  it('should make a request to Coinbase to create a button and log the response or error', function (done) {
    client.createButton({
      name: "test gatewayd",
      price: "1.23",
      currency: "BTC",
      custom: "Order123"
    })
    .then(function(button) {
      console.log(button);
      done();
    })
    .error(function(error) {
      console.log('ERROR', error);
      assert(false);
      done();
    });
  });

});
