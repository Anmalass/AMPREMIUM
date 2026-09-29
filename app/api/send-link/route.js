const express = require('express');
const router = express.Router();
const auth = require('../../../lib/auth');

router.post('/', async (req, res) => {
  const { email } = req.body;
  try {
    await auth.sendMagicLink(email);
    res.json({
      status: 'success',
      message: `Magic link berhasil dikirim ke ${email}. Silakan periksa Folder SPAM/Inbox email Anda.`
    });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
});

module.exports = router;
