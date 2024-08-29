'use server';

import { sendEmail } from '@/services/mailer';
import { validateReCaptcha } from '@/services/recaptcha';

export async function sendContactForm(data: {
  name: string;
  email: string;
  message: string;
  token: string;
}) {
  const captchaValidation = await validateReCaptcha(data.token);

  if (!captchaValidation.valid) {
    throw new Error(captchaValidation.message);
  }

  const emailResponse = await sendEmail(data);

  if (!emailResponse.success) {
    throw new Error(emailResponse.message);
  }

  return emailResponse.messageId;
}
