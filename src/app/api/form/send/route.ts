import { validateReCaptcha } from '@/services/recaptcha';
import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

async function sendEmail(form: any) {
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
      subject: `Tienes un mensaje de ${form.name} a través de enderpuentes.com`,
      text: form.message,
      replyTo: form.email,
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error(`Error al enviar el mensaje: ${error?.message}`);
    return { success: false, message: `Error: ${error?.message}` };
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const captchaValidation = await validateReCaptcha(body.token);
    if (!captchaValidation.valid) {
      return NextResponse.json(
        { message: captchaValidation.message },
        { status: 400 }
      );
    }

    const emailResponse = await sendEmail(body.form);
    if (!emailResponse.success) {
      return NextResponse.json(
        { message: emailResponse.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: emailResponse.messageId });
  } catch (err: any) {
    console.error(`Error: ${err?.message}`);
    return NextResponse.json(
      { error: `Error: ${err?.message}` },
      { status: 500 }
    );
  }
}
