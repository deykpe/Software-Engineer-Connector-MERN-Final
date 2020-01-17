const jwt = require('jsonwebtoken');
const config = require('config');

// middle function is to access req and res cycle objects. Next is to callback and move to next middlleware
module.exports = function(req, res, next) {
  //get token from header
  const token = req.header('x-auth-token');

  // check if no token//401 is not authorized.
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denid' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'token is not valid' });
  }
};
