'use server';

import { url } from "@/providers/coreProviders";
import nodemailer from "nodemailer";

export async function sendPasswordResetEmail(identifier: string, token: string) {
  const res = await fetch(`${url}/users/info`, {
    method: "POST",
    body: JSON.stringify({ identifier })
  });

  if (res.ok) {
    console.error("Failed to fetch user will sending password reset: ", res.status);
  }

  const user = await res.json();

  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    requireTLS: true,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const res = await transporter.sendMail({
      from: `${user.email}`,
      to: "contact@menrvabooks.com",
      subject: `New Contact Message from ${name}`,
      text: `This token will expire in 15 minutes\n\nPassword Reset Token:${token}`,
      // text: `Message from ${name} (${email}): ${message}`, // plain text body
      // html: `<b>Message from ${name} (${email}):</b><div>${message}</div>`, // HTML body content
    });
    return res.response;
  } catch (error) {
    console.error("Error sending email", error);
  }
}