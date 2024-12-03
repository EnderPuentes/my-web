'use client';
import { useEffect, useState } from 'react';

type Props = {};

export function Logo({}: Props) {
  const text = 'Endev';

  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 1;
    const typeInterval = setInterval(() => {
      if (i > text.length) {
        clearInterval(typeInterval);
      }

      setDisplayText(text.slice(0, i));
      i++;
    }, 100);

    return () => clearInterval(typeInterval);
  }, [text]);

  return (
    <>
      <h1 className="text-2xl font-light">
        {displayText.slice(0, 2)}
        <span className="font-black">
          {displayText.slice(2, displayText.length)}
        </span>
        <span className="font-bold animate-blink">_</span>
      </h1>
      <span className="block text-3xs font-light">Software Developer</span>
    </>
  );
}
