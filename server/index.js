/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sqlite3 from 'sqlite3';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const dbFilePath = process.env.CONTACT_DB_PATH || path.join(__dirname, 'contact.sqlite');
const db = new sqlite3.Database(dbFilePath);

db.serialize(() => {
  db.run(
    `
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        userAgent TEXT,
        createdAt TEXT NOT NULL
      )
    `
  );
});

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

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  const normalizedEmail = typeof email === 'string' ? email.trim() : '';

  if (!name || !normalizedEmail || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const createdAt = new Date().toISOString();
  const userAgent = req.get('user-agent') || null;

  db.run(
    'INSERT INTO contact_submissions (name, email, message, userAgent, createdAt) VALUES (?, ?, ?, ?, ?)',
    [name, normalizedEmail, message, userAgent, createdAt],
    function onInsert(err) {
      if (err) {
        console.error('DB insert error:', err.message);
        return res.status(500).json({ error: 'Failed to store submission' });
      }

      res.json({ ok: true, id: this.lastID });
    }
  );
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body || {};
  const normalizedEmail = typeof email === 'string' ? email.trim() : '';
  const isEmailLikelyValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

  if (!name || !normalizedEmail || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!isEmailLikelyValid) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  try {
    if (process.env.EMAIL_DRY_RUN === 'true') {
      console.log('[email] DRY RUN: would send mail', { name, email, message });
      return res.json({ ok: true, dryRun: true });
    }

    const transporter = buildTransporter();
    const from = process.env.EMAIL_FROM || process.env.EMAIL_USER;
    const to = process.env.EMAIL_TO || process.env.EMAIL_USER;
    const subject = `New contact form submission from ${name}`;
    const text = `Name: ${name}\nEmail: ${normalizedEmail}\n\n${message}`;
    await transporter.sendMail({ from, to, subject, text, replyTo: normalizedEmail });

    const ackSubject = process.env.EMAIL_ACK_SUBJECT || "Thanks — we've received your message";
    const ackText = `Hi ${name},\n\nThanks for reaching out — we’ve received your message and will get back to you soon.\n\nYour message:\n${message}\n`;
    await transporter.sendMail({ from, to: normalizedEmail, subject: ackSubject, text: ackText, replyTo: to });
    res.json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err.message);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`[server] Listening on http://localhost:${PORT}`);
  console.log(`[server] Contact DB at ${dbFilePath}`);
});
