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
      return { valid: false, message: 'Captcha inválido' };
    }

    return { valid: true };
  } catch (error: any) {
    console.error(`Error en la validación del CAPTCHA: ${error?.message}`);
    return { valid: false, message: 'Error al verificar el CAPTCHA' };
  }
}
