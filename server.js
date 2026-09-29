const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
const sendLinkRoute = require('./app/api/send-link/route');
const verifyLinkRoute = require('./app/api/verify-link/route');
const statusRoute = require('./app/api/status/route');
const statsRoute = require('./app/api/stats/route');

app.use('/api/send-link', sendLinkRoute);
app.use('/api/verify-link', verifyLinkRoute);
app.use('/api/status', statusRoute);
app.use('/api/stats', statsRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`[am-reverse] Server running on port ${PORT}`));
}

module.exports = app;
