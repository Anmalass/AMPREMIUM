// Original Firebase Auth / Alight Motion reverse module
const errors = require('./errors');

async function sendMagicLink(email) {
  if (!email || !email.includes('@')) {
    throw new Error(errors.INVALID_EMAIL);
  }
  return { success: true, email };
}

async function verifyToken(link) {
  if (!link) {
    throw new Error(errors.INVALID_TOKEN);
  }
  return { success: true, token: link };
}

module.exports = {
  sendMagicLink,
  verifyToken
};
