'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const text = `Ender Puentes\n   Software Developer`;

  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [index]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-900 py-5 mb-10">
      <div className="container">
        <div className="bg-black rounded-lg shadow-lg overflow-hidden w-full h-[220px] md:h-[380px]">
          <div className="bg-gray-800 text-gray-300 p-3 flex items-center space-x-2 w-full">
            <span className="block w-3 h-3 rounded-full bg-red-500"></span>
            <span className="block w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="block w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div className="p-6">
            <pre className="text-green-500 font-mono whitespace-pre-wrap">
              <span>{'~/ '}</span>
              {currentText}
              {showCursor && <span className="font-bold">_</span>}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
