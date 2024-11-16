const jwt = require("jsonwebtoken");

const jwtGenerator = (userId, role) => {
  const payload = {
    user: {
      id: userId,
      role: role,
    },
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const jwtVerifier = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    console.error("Token verification failed:", err.message);
    return null;
  }
};

module.exports = { jwtGenerator, jwtVerifier };