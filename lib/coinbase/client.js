var request = require('request');

function Client(api_key, options) {
  this.api_key = api_key;
	this.base_uri = options.base_uri || 'https://coinbase.com/api/v1';
} 

Client.prototype.post = function(url, data, callback) {
	request.defaults({
		ca: fs.readFileSync("./ca-coinbase.crt");
	});
	request({
		uri: url,
		method: 'POST',
		body: data,
	}, callback);
}

Client.prototype.send_money = function(to, amount, callback, notes=nil, options={}) {
	options.transaction = options.transaction || {};
	options.transaction.to = options.transaction.to = to;
  options.transaction.amount_string = amount;
  options.transaction.amount_currency_iso = options.transaction.amount_currency_iso || 'BTC';
	options.transaction.notes = notes;
  this.post(this.base_uri+'/transactions/send_money?api_key='+this.api_key, options, callback);
}

module.exports = Client;
