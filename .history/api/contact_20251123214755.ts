import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  const { fullName, email, service, budgetRange, message, honeypot } = request.body;

  // Honeypot anti-spam
  if (honeypot) {
    return response.status(200).json({ success: true }); 
  }

  // Required fields check
  if (!fullName || !email || !message) {
    return response.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Floxenta Web" <${process.env.SMTP_USER}>`,
      to: process.env.SENDGRID_TO || 'hello@floxenta.com',
      subject: `New Inquiry: ${service || "General"} from ${fullName}`,
      text: `
Name: ${fullName}
Email: ${email}
Service: ${service}
Budget: ${budgetRange}
Message: ${message}
      `,
      html: `
        <h2>New Inquiry from Floxenta Website</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budgetRange}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return response.status(500).json({ error: 'Failed to send message' });
  }
}

// Required for Vercel (sets Node.js runtime)
export const config = {
  runtime: "nodejs",
};
