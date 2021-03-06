const jwt = require('jsonwebtoken');

const { secret } = require('../utils');

const authMiddleware = (req, res, next) => {
  try {
    const authToken = req.headers.authorization;
    if (!authToken) {
      return res.status(401).json({ message: 'missing auth token' });
    }

    const { data: { email, role, _id } } = jwt.verify(authToken, secret);
  
    req.authInfo = {
      userId: _id,
      email,
      role,
      authorized: true,
    };
  
    next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = {
  authMiddleware,
};
