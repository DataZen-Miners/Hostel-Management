const jetToken = require('jsonwebtoken');

const authWarden = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({message: 'Access Denied'});
    }
    try {
        const verified = jetToken.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(400).json({message: 'Invalid Token'});
    }
}


const authAdmin = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({message: 'Access Denied'});
    }
    try {
        const verified = jetToken.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(400).json({message: 'Invalid Token'});
    }
}


const authStudent = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({message: 'Access Denied'});
    }
    try {
        const verified = jetToken.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(400).json({message: 'Invalid Token'});
    }
}

const authComplaints = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({message: 'Access Denied'});
    }
    try {
        const verified = jetToken.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(400).json({message: 'Invalid Token'});
    }
}



module.exports = {authWarden, authAdmin , authStudent , authComplaints};