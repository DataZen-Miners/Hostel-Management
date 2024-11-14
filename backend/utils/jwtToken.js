const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(id, type) {
    const payload = {
        user: {
            id: id,
            type: type
        }
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
}

function jwtVerifier(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        console.error("Token verification failed:", err.message);
        return null;
    }
}

module.exports = { jwtGenerator, jwtVerifier };