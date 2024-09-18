import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(request: Request) {
  try {
    const lang = new URL(request.url).searchParams.get('lang') ?? 'en';
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/logbook?pdf=true`;

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('screen');

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      scale: 0.6,
    });

    await browser.close();

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=enderpuentes_${lang}.pdf`,
      },
    });
  } catch (error) {
    console.error('Error generando PDF:', error);
    return new NextResponse('Error generando PDF', { status: 500 });
  }
}
