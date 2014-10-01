## coinbase-node

### A node.js client for interacting with the Coinbase REST API.

- send bitcoins from a Coinbase acccount
- generate Bitcoin invoices with callback urls

## Installation

    npm install coinbase-node

## Initialization

    const coinbase = new CoinbaseClient({
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

