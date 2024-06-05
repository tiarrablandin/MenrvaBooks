'use server';

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    let transporter = nodemailer.createTransport({
        // host: process.env.EXCHANGE_SMTP_HOST, // Exchange SMTP host, e.g., smtp.office365.com
        // host: "smtp-mail.outlook.com",
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        requireTLS: true,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
        auth: {
            user: process.env.SMTP_USER, // use environment variables for security
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        const res = await transporter.sendMail({
            from: `${email}`,
            to: "contact@menrvabooks.com",
            subject: `New Contact Message from ${name}`,
            text: `You have received a new message from ${email}:\n\n${message}`,
            // text: `Message from ${name} (${email}): ${message}`, // plain text body
            // html: `<b>Message from ${name} (${email}):</b><div>${message}</div>`, // HTML body content
        });
        console.log(res.response);
        return res.response;
    } catch (error) {
        console.error("Error sending email", error);
    }
};