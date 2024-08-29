'use server';

import { createTransport } from 'nodemailer';

export async function sendEmail(form: any) {
  try {
    const transporter = createTransport({
      // @ts-ignore
      service: process.env.NODEMAILER_SERVICE,
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const mailOptions = {
      from: 'hello@enderpuentes.com',
      to: 'hello@enderpuentes.com',
      subject: `Here's a message from ${form.name} via enderpuentes.com.`,
      text: form.message,
      replyTo: form.email,
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error(`Failed to send the message: ${error?.message}`);
    return { success: false, message: `Error: ${error?.message}` };
  }
}
