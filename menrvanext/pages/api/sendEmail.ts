import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    // host: process.env.EXCHANGE_SMTP_HOST, // Exchange SMTP host, e.g., smtp.office365.com
    host: "smtpout.secureserver.net",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER, // use environment variables for security
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `${email}`,
      to: "contact@menrvabooks.com",
      subject: `New Contact Message from ${name}`,
      text: `You have received a new message from ${email}:\n\n${message}`,
      // text: `Message from ${name} (${email}): ${message}`, // plain text body
      // html: `<b>Message from ${name} (${email}):</b><p>${message}</p>`, // HTML body content
    });

    res.status(200).send("Message sent successfully");
  } catch (error) {
    console.error("Error sending email", error);
    res.status(500).send("Failed to send message");
  }
};

export default sendEmail;
