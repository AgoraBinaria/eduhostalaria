const jwt = require('jsonwebtoken');
const logger = require('winston');
const config = require('../tools/config');

const secret = config.secret;
const expiresIn = 60 * 60 * 24 * 7;
exports.createToken = user => jwt.sign(user, secret, { expiresIn });

exports.verifyToken = (token) => {
  try {
    const user = jwt.verify(token, secret);
    return user;
  } catch (err) {
    logger.warn(`token not verified: ${err.message}`);
    return false;
  }
};
