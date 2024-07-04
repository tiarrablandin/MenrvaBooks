"use server";

import { fetchUserByTag } from "@/lib/services/apiService";
import nodemailer from "nodemailer";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${baseUrl}/api`;

export async function sendPasswordResetEmail(identifier: string, token: string) {
  const user = await fetchUserByTag(identifier);
  // const res = await fetch(`${url}/users/info`, {
  //   method: "POST",
  //   body: { identifier }
  // });

  if (!user) {
    return "Failed to fetch user will sending password reset: ";
  }

  // const user = await res.json();
  console.log("*********************************" + user);

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
