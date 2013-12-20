Node.js client for interacting with the Coinbase REST API.

Currently only supports API Key based access.

		var Coinbase = require("coinbase-node");
				
		var client = new Coinbase.Client({ 
			api_key: 'my8coinb7ase3apikey'
		}); 

		function callback(err, resp, body){
			console.log(body);
		}
		
		client.send_money('1G2UULb1M3hbB2b4Kt5v3E1R6Pc2XNW756','0.01', callack);

The above code will send 0.01 bitcoins to the bitcoin address listed.


