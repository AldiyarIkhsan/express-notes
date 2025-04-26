const jwt = require('jsonwebtoken');

const JWT_CONFIG = {
  access: {
    secret: 'your-access-secret-key',
    expiresIn: '15m'
  },
  refresh: {
    secret: 'your-refresh-secret-key',
    expiresIn: '7d'
  }
};

const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { 
      userId: user.id, 
      username: user.username 
    },
    JWT_CONFIG.access.secret,
    { expiresIn: JWT_CONFIG.access.expiresIn }
  );

  const refreshToken = jwt.sign(
    { 
      userId: user.id,
      tokenType: 'refresh'
    },
    JWT_CONFIG.refresh.secret,
    { expiresIn: JWT_CONFIG.refresh.expiresIn }
  );

  return { accessToken, refreshToken };
};

const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, JWT_CONFIG.access.secret);
  } catch (error) {
    return null;
  }
};

const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, JWT_CONFIG.refresh.secret);
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken
}; 