const jsonwebtoken = require('jsonwebtoken');

const SECRET = 'test_key';
const EXPIRES = '7 days';

module.exports = {
  generate(value, expires = EXPIRES) {
    try {
      return jsonwebtoken.sign(value, SECRET, { expiresIn: expires });
    } catch (e) {
      return null;
    }
  },
  verify(token) {
    try {
      return jsonwebtoken.verify(token, secret);
    } catch (e) {
      return false;
    }
  },
};
