import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body as ContactForm;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Use environment variables instead of hardcoding credentials
  const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525, // or 2525 (both supported)
    secure: false, // true for port 465, false for others
    auth: {
      user: process.env.SMTP_USER, // from .env
      pass: process.env.SMTP_PASS, // from .env
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER, // must match auth.user
      replyTo: email,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `Portfolio Contact: ${name}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
