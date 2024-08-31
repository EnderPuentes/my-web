'use client';

import { HeroSchema } from '@/services/sanity/parser';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = { data: HeroSchema; lang: 'en' | 'es' };

export default function Hero({ data, lang }: Props) {
  const [introMessage, setIntroMessage] = useState('');
  const [indexIntroMessage, setIndexIntroMessage] = useState(0);

  const [onTerminalIntro, setOnTerminalIntro] = useState(true);
  const [onTerminalActions, setOnTerminalActions] = useState(false);
  const [historyTerminal, setHistoryTerminal] = useState<string[]>([]);
  const [inputTerminal, setInputTerminal] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (indexIntroMessage < data.content.length) {
      const timeoutId = setTimeout(() => {
        setIntroMessage(
          (prev) => prev + data.content.charAt(indexIntroMessage)
        );
        setIndexIntroMessage(indexIntroMessage + 1);
      }, 50);
      return () => clearTimeout(timeoutId);
    } else {
      setOnTerminalActions(true);
    }
  }, [indexIntroMessage, data.content]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setHistoryTerminal((prev) => [...prev, inputTerminal]);

      switch (inputTerminal.trim().toLowerCase()) {
        case 'help':
          setHistoryTerminal((prev) => [
            ...prev,
            'Available commands: help, view logbook, send message, clear',
          ]);
          break;
        case 'view logbook':
          router.push(`${lang}/logbook`);
          break;
        case 'send message':
          router.push(`${lang}/#contact`);
          break;
        case 'clear':
          setHistoryTerminal([]);
          setOnTerminalIntro(false);
          break;
        default:
          setHistoryTerminal((prev) => [...prev, 'Command not found']);
          break;
      }

      setInputTerminal('');
    }
  };

  return (
    <div className="flex justify-center items-center bg-slate-100 dark:bg-gray-950 py-5">
      <div className="container">
        <div className="bg-gray-800 dark:bg-black rounded-lg shadow-lg overflow-hidden w-full h-[240px] md:h-[480px]">
          <div className="bg-gray-600 dark:bg-gray-800 text-gray-300 p-3 flex items-center space-x-2 w-full">
            <span className="block w-3 h-3 rounded-full bg-red-500"></span>
            <span className="block w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="block w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div className="px-3 py-6 sm:px-6">
            {onTerminalIntro ? (
              <pre className="font-mono whitespace-pre-wrap text-xs sm:text-base leading-5 sm:leading-7 flex justify-start items-start gap-1">
                <span className="text-green-500 block w-4 sm:w-6">{'~/ '}</span>
                <span className="text-gray-300 flex-1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: introMessage,
                    }}
                  />
                  {/* <span className="font-bold animate-blink">_</span> */}
                </span>
              </pre>
            ) : null}
            {onTerminalActions ? (
              <>
                <pre className="font-mono whitespace-pre-wrap text-xs sm:text-base leading-5 sm:leading-7 mt-5">
                  {historyTerminal.map((command, indexIntroMessage) => (
                    <div
                      className="flex justify-start items-start gap-1"
                      key={indexIntroMessage}
                    >
                      <span className="text-green-500 block w-4 sm:w-6">
                        {'~/ '}
                      </span>
                      <span className="text-gray-300 flex-1">{command}</span>
                    </div>
                  ))}
                </pre>
                <div className="flex justify-start items-start gap-1">
                  <span className="text-green-500 block w-4 sm:w-6">
                    {'~/ '}
                  </span>
                  <input
                    type="text"
                    className="bg-transparent text-gray-300 outline-none flex-1"
                    value={inputTerminal}
                    onChange={(e) => setInputTerminal(e.target.value)}
                    onKeyPress={handleKeyPress}
                    autoFocus
                  />
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
