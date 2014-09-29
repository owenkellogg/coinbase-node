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

## New Interface

    coinbase = new CoinbaseClient({
      apiKey: process.env.COINBASE_API_KEY,
      secret: process.env.COINBASE_SECRET
    });

### Send Money

    coinbase.sendMoney({
      to: 'me@stevenzeiler.com',
      amount: 1.5,
      note: 'Payment for Services'
    })
    .then(function(transaction) {
      // do something with new transaction
    })
    .error(function(error) {
      // handle error
    });

### Get Transaction
    
    coinbase.getTransaction({
      id: 12345
    })
    .then(function(transaction) {
      // do something with new transaction
    })
    .error(function(error) {
      // handle error
    });

### List Transactions

    coinbase.listTransactions()
    .then(function(transaction) {
      // do something with new transactions
    })
    .error(function(error) {
      // handle error
    });

