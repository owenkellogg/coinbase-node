var request = require('request'),
    fs			= require('fs');

function Client(options) {
  this.api_key = options.api_key;
	this.base_uri = 'https://coinbase.com/api/v1';
} 

Client.prototype.post = function(url, data, callback) {
	request.defaults({
		ca: fs.readFileSync("./lib/coinbase/ca-coinbase.crt")
	});
	request.post(url, {
		json: data,
	}, function(err, resp, body) { callback(err, body) });
}

Client.prototype.send_money = function(to, amount, callback, options) {
	options = options || {};
	options.transaction = options.transaction || {};
	options.transaction.to = options.transaction.to = to;
  options.transaction.amount_string = amount;
  options.transaction.amount_currency_iso = options.transaction.amount_currency_iso || 'BTC';
	options.transaction.notes = options.notes;
  this.post(this.base_uri+'/transactions/send_money?api_key='+this.api_key, options, callback);
}

module.exports = Client;
