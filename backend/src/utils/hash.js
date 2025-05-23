const crypto = require('crypto');

/**
 * Generates a random salt for hashing.
 * @returns {string} A hexadecimal string representing the salt.
 */
const generateSalt = () => {
  const salt = crypto.randomBytes(16).toString('hex');
  return salt;
};

/**
 * Hashes the email using the provided salt.
 * @param {string} email - The email to hash.
 * @param {string} salt - The salt to use for hashing.
 * @returns {string} A hexadecimal string representing the hash.
 */
const hashEmail = (email, salt) => {
  if (!email || !salt) {
    throw new Error('Email and salt are required');
  }
  const hash = crypto.createHash('sha256');
  hash.update(`${email}:${salt}`);
  return hash.digest('hex');
};

module.exports = { generateSalt, hashEmail };