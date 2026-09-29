const express = require('express');
const router = express.Router();
const auth = require('../../../lib/auth');

router.post('/', async (req, res) => {
  const { link, email } = req.body;
  try {
    await auth.verifyToken(link);
    res.json({
      status: 'success',
      message: `Aktivasi Sukses! Account ${email || 'Alight Motion'} berhasil diperbarui ke Premium.`
    });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
});

module.exports = router;
