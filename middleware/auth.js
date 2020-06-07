const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const auth = (req, res, next) => {
    let token = req.get('Authorization') || req.query.token || req.body.token

    // Check for token
    if(!token) res.status(401).json({ msg: 'No token, authorization denied'})

    try {
        // Verify token
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();

    } catch(e) {
        res.status(400).json({ msg: 'Token is not valid' })
    }
};

module.exports = auth;