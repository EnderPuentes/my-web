import { FormSchema } from '@/components/common/contact';
import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

async function validateCaptcha(token: string) {
  try {
    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY ?? '',
          response: token,
        }),
      }
    );

    const data = await response.json();

    if (!data.success || data.score < 0.5) {
      return { valid: false, message: 'Captcha inválido' };
    }

    return { valid: true };
  } catch (error: any) {
    console.error(`Error en la validación del CAPTCHA: ${error?.message}`);
    return { valid: false, message: 'Error al verificar el CAPTCHA' };
  }
}

async function sendEmail(form: FormSchema) {
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

    const captchaValidation = await validateCaptcha(body.token);
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
