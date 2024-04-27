const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
const token = req.header('Authorization');
if (!token) return res.status(401).json({ error: 'Access denied' });
try {
    console.log(process.env.JWT_SECRET);
 const decoded = jwt.verify(token,  process.env.JWT_SECRET);
 req.userId = decoded.userId;
 next();
 } catch (error) {
    console.error(error)
 res.status(401).json({ error: 'Invalid token' });
 }
 };

module.exports = verifyToken;