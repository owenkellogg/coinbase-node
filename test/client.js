const CoinbaseClient = require(__dirname + '/../lib/client.js');
const assert = require('assert');

const client = new CoinbaseClient({
  apiKey: process.env.COINBASE_API_KEY,
  secret: process.env.COINBASE_SECRET_KEY
});

describe('Coinbase Node Service', function () {

  it('should make a request to Coinbase to send money and log the response or error', function (done) {
    client.sendMoney({
      transaction: {
        to: '',
        amount: ''
      }
    })
      .then(function(transactions) {
        console.log(transactions);
        done();
      })
      .error(function(error) {
        console.log('ERROR', error);
        assert(false);
        done();
      });
  });


  it('should make a request to Coinbase to see transaction details and log the response or error', function (done) {
    client.show({id: ''})
      .then(function(transaction) {
        console.log(transaction);
        done();
      })
      .error(function(error) {
        console.log('ERROR', error);
        assert(false);
        done();
      });
  });

  it('should make a request to Coinbase to see all transactions and log the response or error', function (done) {
    client.list()
      .then(function(transactions) {
        console.log(transactions);
        done();
      })
      .error(function(error) {
        console.log('ERROR', error);
        assert(false);
        done();
      });
  });
});
