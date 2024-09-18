import chromium from '@sparticuz/chromium';
import { NextRequest, NextResponse } from 'next/server';
import puppeteer, { Browser } from 'puppeteer';

export const maxDuration = 30;
export const dynamic = 'force-dynamic';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getBrowser() {
  let browser: Browser;

  chromium.setHeadlessMode = true;
  chromium.setGraphicsMode = false;

  const chromeArgs = [
    '--font-render-hinting=none',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--disable-animations',
    '--disable-background-timer-throttling',
    '--disable-restore-session-state',
    '--disable-web-security',
    '--single-process',
  ];

  try {
    browser = await puppeteer.launch({
      ...(process.env.NODE_ENV !== 'production'
        ? { channel: 'chrome' }
        : {
            args: chromeArgs,
            executablePath: await chromium.executablePath(),
            ignoreHTTPSErrors: true,
            headless: true,
          }),
    });
  } catch (error) {
    throw new Error('Failed to start browser');
  }

  return browser;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { lang: 'en' | 'es' } }
) {
  try {
    const url = `${BASE_URL}/${params.lang}/logbook?pdf=true`;

    const browser = await getBrowser();
    const page = await browser.newPage();

    await page.emulateMediaType('screen');
    const response = await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    if (!response || !response.ok()) {
      throw new Error('Failed to load the page for PDF generation');
    }

    const pdfBuffer = await page.pdf({
      scale: 0.6,
      format: 'A4',
      printBackground: true,
      margin: { top: '0.5cm', right: '0.5cm', bottom: '0.5cm', left: '0.5cm' },
    });

    const pages = await browser.pages();
    for (const openPage of pages) {
      await openPage.close();
    }

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
