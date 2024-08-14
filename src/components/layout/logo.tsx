'use client';
import { useEffect, useState } from 'react';

type Props = {};

export default function Logo({}: Props) {
  const text = 'Endev';

  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

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

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <h1 className="text-2xl font-light">
      {displayText.slice(0, 2)}
      <span className="font-black">
        {displayText.slice(2, displayText.length)}
      </span>
      {showCursor && <span className="font-bold">_</span>}
    </h1>
  );
}
