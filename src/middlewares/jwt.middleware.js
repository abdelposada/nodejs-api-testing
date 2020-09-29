const expressJwt = require('express-jwt');
const {
  jwt: { secret },
} = require('../config/config');

module.exports = expressJwt({
  secret,
  algorithms: ['HS256'],
}).unless({
  path: [
    {
      url: /\.*\/(login|register)/,
      method: 'POST',
    },
    {
      url: /^((?!api).)*$/,
      method: 'GET',
    },
  ],
});
