'use client';

import { useEffect, useState } from 'react';

type Props = {
  text: string;
};

export default function Hero({ text }: Props) {
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
  }, [index, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex justify-center items-center bg-slate-100 dark:bg-gray-950 py-5 mb-5 sm:mb-10">
      <div className="container">
        <div className="bg-black rounded-lg shadow-lg overflow-hidden w-full h-[240px] md:h-[280px]">
          <div className="bg-gray-800 text-gray-300 p-3 flex items-center space-x-2 w-full">
            <span className="block w-3 h-3 rounded-full bg-red-500"></span>
            <span className="block w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="block w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div className="p-6">
            <pre className="font-mono whitespace-pre-wrap text-xs sm:text-base leading-5 sm:leading-7 flex justify-start items-start gap-0">
              <span className="text-green-500 w-6">{'~/ '}</span>
              <span className="text-gray-300">
                {currentText}
                {showCursor && <span className="font-bold">_</span>}
              </span>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
