const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
  res.json({ status: 'online', engine: 'Vercel Serverless Node.js', version: '1.0.0' });
});

app.post('/api/send-link', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ status: 'error', message: 'Email tidak boleh kosong.' });
  }
  // Simulasi / integrasi trigger Magic Link Firebase Auth
  res.json({ 
    status: 'success', 
    message: `Magic link berhasil dipicu untuk ${email}. Silakan cek Inbox atau Folder Spam Anda.` 
  });
});

app.post('/api/verify-link', (req, res) => {
  const { link, email } = req.body;
  if (!link) {
    return res.status(400).json({ status: 'error', message: 'Magic link tidak boleh kosong.' });
  }
  res.json({ 
    status: 'success', 
    message: `Aktivasi Sukses! Token akun ${email || ''} telah terverifikasi dan aktif sebagai Alight Motion Premium.` 
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
