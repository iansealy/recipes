var os = require('os')

module.exports = Franz =>
  class Gmail extends Franz {
    modifyRequestHeaders() {
      return [
        {
          headers: {
            'user-agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0',
          },
          requestFilters: {
            urls: ['*://*/*'],
          }
        }
      ]
    }
  };
