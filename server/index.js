/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

function buildTransporter() {
  const service = process.env.EMAIL_SERVICE;
  const host = process.env.EMAIL_HOST;
  const port = process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : undefined;
  const secure = process.env.EMAIL_SECURE ? process.env.EMAIL_SECURE === 'true' : undefined;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error('Missing EMAIL_USER or EMAIL_PASS environment variables');
  }

  if (service) {
    return nodemailer.createTransport({
      service,
      auth: { user, pass },
    });
  }

  if (!host || !port || typeof secure === 'undefined') {
    throw new Error('Missing EMAIL_HOST/EMAIL_PORT/EMAIL_SECURE env for custom SMTP');
    }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const transporter = buildTransporter();
    const from = process.env.EMAIL_FROM || process.env.EMAIL_USER;
    const to = process.env.EMAIL_TO || process.env.EMAIL_USER;
    const subject = `New contact form submission from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    await transporter.sendMail({ from, to, subject, text, replyTo: email });
    res.json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err.message);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`[email-server] Listening on http://localhost:${PORT}`);
});

