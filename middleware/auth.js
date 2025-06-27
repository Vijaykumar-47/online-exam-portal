const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access Denied: No Token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(400).json({ message: 'Invalid Token' });
  }
}

module.exports = auth;
