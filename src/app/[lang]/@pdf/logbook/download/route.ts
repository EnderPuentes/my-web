import chromium from '@sparticuz/chromium';
import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import puppeteerCore from 'puppeteer-core';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function GET(
  req: NextRequest,
  { params }: { params: { lang: 'en' | 'es' } }
) {
  try {
    const url = `${BASE_URL}/${params.lang}/logbook?pdf=true`;

    let browser = null;

    console.log('TESTTTTT', { ENV: process.env.NODE_ENV });

    if (process.env.NODE_ENV === 'production') {
      browser = await puppeteerCore.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(
          '/usr/bin/chromium-browser'
        ),
        headless: chromium.headless,
      });
    } else {
      browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true,
      });
    }

    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('screen');

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      scale: 0.6,
      margin: { top: '0.5cm', right: '0.5cm', bottom: '0.5cm', left: '0.5cm' },
    });

    await browser.close();

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=enderpuentes_${params.lang}.pdf`,
      },
    });
  } catch (error) {
    console.error('Error generando PDF:', error);
    return new NextResponse('Error generando PDF', { status: 500 });
  }
}
