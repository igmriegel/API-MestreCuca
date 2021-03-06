const jwt = require('jsonwebtoken');

const secret = 'projetoCookmasterT10TA';

const newError = (status, message) => {
  const error = new Error(message);

  error.status = status;

  return error;
};

const generateJWT = (userData) => {
  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
  const token = jwt.sign({ data: userData }, secret, jwtConfig);

  return token;
};

module.exports = {
  newError,
  generateJWT,
  secret,
};
