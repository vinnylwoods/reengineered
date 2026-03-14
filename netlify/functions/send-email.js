const nodemailer = require('nodemailer');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

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

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: 'OK' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const transporter = buildTransporter();

    const from = process.env.EMAIL_FROM || process.env.EMAIL_USER;
    const to = process.env.EMAIL_TO || process.env.EMAIL_USER;
    const subject = `New contact form submission from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    await transporter.sendMail({ from, to, subject, text, replyTo: email });
    const ackSubject = process.env.EMAIL_ACK_SUBJECT || "Thanks — we've received your message";
    const ackText = `Hi ${name},\n\nThanks for reaching out — we’ve received your message and will get back to you soon.\n\nYour message:\n${message}\n`;
    await transporter.sendMail({ from, to: email, subject: ackSubject, text: ackText, replyTo: to });

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error('Email send error:', err.message);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
