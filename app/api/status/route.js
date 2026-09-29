const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'online', engine: 'am-reverse-1.0.0', version: '1.0.0' });
});

module.exports = router;
