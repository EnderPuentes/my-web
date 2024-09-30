'use client';

import { cn } from '@/lib/utils';
import { useState, useTransition } from 'react';
import { PiCheck, PiCopy, PiDownloadSimple, PiSpinner } from 'react-icons/pi';
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
      {copied ? <PiCheck /> : <PiCopy />}
    </Button>
  );
}

export function CopyTextButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Error:', err);
    }
  }

  return (
    <Button
      variant="ghost"
      className={cn('text-md sm:text-2xl px-2 text-gray-200', className)}
      onClick={handleCopy}
      title="Copy Text"
    >
      {copied ? <PiCheck /> : <PiCopy />}
    </Button>
  );
}

export function DownloadUrlButton({ url }: { url: string }) {
  const [isPending, startTransition] = useTransition();

  async function handleDownload() {
    startTransition(async () => {
      const a = document.createElement('a');

      a.href = url;
      a.target = '_blank';

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      await new Promise((resolve) => setTimeout(resolve, 4000));
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
