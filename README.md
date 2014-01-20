## coinbase-node

### A node.js client for interacting with the Coinbase REST API.

- send bitcoins from a Coinbase acccount
- generate Bitcoin invoices with callback urls

Currently only supports API Key based access.

## Installation

    npm install coinbase-node

## Example

		var Coinbase = require("coinbase-node");
				
		var client = new Coinbase.Client({ 
			api_key: process.env.COINBASE_API_KEY
		}); 

		function callback(err, resp, body){
			console.log(body);
		}
		
		client.send_money('1G2UULb1M3hbB2b4Kt5v3E1R6Pc2XNW756','0.01', callack);

The above code will send 0.01 bitcoins to the bitcoin address listed.


