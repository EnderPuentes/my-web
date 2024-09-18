'use client';

import { useState, useTransition } from 'react';
import { PiCheck, PiDownloadSimple, PiLink, PiSpinner } from 'react-icons/pi';
import { Button } from '../ui/button';

export function CopyUrlButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Error:', err);
    }
  }

  return (
    <Button
      variant="link"
      className="text-md sm:text-2xl p-0"
      onClick={handleCopy}
      title="Copy Url"
    >
      {copied ? <PiCheck /> : <PiLink />}
    </Button>
  );
}

export function DownloadUrlButton({ url }: { url: string }) {
  const [isPending, startTransition] = useTransition();

  async function handleDownload() {
    startTransition(async () => {
      const a = document.createElement('a');

      a.href = url;
      a.download = 'enderpuentes_logbook.pdf';

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      await new Promise((resolve) => setTimeout(resolve, 3000));
    });
  }

  return (
    <Button
      variant="link"
      className="text-md sm:text-2xl p-0"
      onClick={handleDownload}
      title="Download Url"
    >
      {isPending ? (
        <PiSpinner className="animate-spin" />
      ) : (
        <PiDownloadSimple />
      )}
    </Button>
  );
}
