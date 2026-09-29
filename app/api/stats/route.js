const express = require('express');
const router = express.Router();
const stats = require('../../../lib/stats');

router.get('/', (req, res) => {
  res.json({ status: 'success', data: stats.getStats() });
});

module.exports = router;
