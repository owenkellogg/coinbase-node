const crypto = require('crypto');

function RequestService(options) {
  this.apiKey = options.apiKey;
  this.secret = options.secret;
}

RequestService.prototype = {

  generateHeaders: function(url, body) {
    var _this = this;
    var nonce = _this._getNonce();
    return {
      'ACCESS_KEY': _this.apiKey,
      'ACCESS_SIGNATURE': _this._generateSignature(nonce, url, body),
      'ACCESS_NONCE': nonce,
      'Content-Type': 'application/json'
    }
  },

  _generateSignature: function (nonce, url, body) {
    var _this = this;
    var message = nonce + url + (body != undefined ? JSON.stringify(body) : '');
    console.log(message);
    return _this._hash(message, _this.secret);
  },

  _getNonce: function () {
    return new Date().getTime().toString();
  },

  _hash: function (message, secret) {
    var shasum = crypto.createHmac('sha256', secret);
    shasum.update(message);
    return shasum.digest('hex');
  }
};

module.exports = RequestService;