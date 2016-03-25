var restClient = require('json-rest-client');

module.exports = function (conf) {
  var rest = restClient({
      url: 'https://restapi.e-conomic.com/',
  }, {
      headers: {
          'appId': conf.appId,
          'accessID': conf.accessID,
          'Content-Type': 'application/json'
      }
  });

  var api = {
      home: rest.get('/'),
      suppliers: rest.resource('/suppliers', function(member, collection) {
          return {};
      })
  };

  return api;
}
