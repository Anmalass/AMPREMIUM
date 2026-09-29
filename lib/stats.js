const fs = require('fs');
const path = require('path');

const statsPath = path.join(__dirname, '../data/stats.json');

function getStats() {
  try {
    const data = fs.readFileSync(statsPath, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return { totalRequests: 0, successfulVerifications: 0 };
  }
}

module.exports = { getStats };
