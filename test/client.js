var Coinbase = require('../lib/coinbase.js');

var client = new Coinbase.Client({
  api_key: process.env.COINBASE_API_KEY
});

client.send_money('1PeStttm97H3twHfqpWRmAGAjWRWuYnxQn','0.001', function(err, data){
  console.log(data);
  console.log(err);
});
