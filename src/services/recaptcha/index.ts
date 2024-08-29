'use server';

export async function validateReCaptcha(token: string) {
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
      return { valid: false, message: 'Captcha invalid' };
    }

    return { valid: true };
  } catch (error: any) {
    return { valid: false, message: 'Failed to verify the CAPTCHA' };
  }
}
