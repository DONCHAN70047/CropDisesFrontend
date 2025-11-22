import jwt from 'jsonwebtoken'

export function validatePassword(password) {
  const errors = [];

  // length checks
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters.");
  }
  if (password.length > 32) {
    errors.push("Password must be no more than 32 characters.");
  }

  // regex checks
  if (!/[A-Z]/.test(password)) {
    errors.push("Must contain at least one uppercase letter.");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Must contain at least one lowercase letter.");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Must contain at least one number.");
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push("Must contain at least one special character.");
  }

  return {
    valid: errors.length === 0,
    errors
  };
}


const access_token_secret = process.env.ACCESS_TOKEN_SECRET
const refresh_token_secret = process.env.REFRESH_TOKEN_SECRET


export function createAccessToken(payload) {
  return jwt.sign(payload, access_token_secret, {
    expiresIn: "24h",
    algorithm: "HS384"
  });
}

export function createRefreshToken(payload) {
  return jwt.sign(payload, refresh_token_secret, {
    expiresIn: "30d", // or "1M"
    algorithm: "HS384",
  });
}

export function verifyAccessToken(token) {
  try {
    return jwt.verify(token, access_token_secret, {
      algorithms: ["HS384"],
    });
  } catch (err) {
    return null;
  }
}

export function verifyRefreshToken(token) {
  try {
    return jwt.verify(token, refresh_token_secret, {
      algorithms: ["HS384"],
    });
  } catch (err) {
    return null;
  }
}