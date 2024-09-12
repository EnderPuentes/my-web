'use client';

import { HeroSchema } from '@/services/sanity/parser';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

function Prompt() {
  return <span className="text-green-500 block w-4 sm:w-6">{'~/ '}</span>;
}

function Command({ command }: { command: string }) {
  return (
    <span className="text-gray-300 flex-1">
      <span
        dangerouslySetInnerHTML={{
          __html: command,
        }}
      />
    </span>
  );
}

type Props = { data: HeroSchema; lang: 'en' | 'es' };

export function Hero({ data, lang }: Props) {
  const [introMessage, setIntroMessage] = useState('');
  const [indexIntroMessage, setIndexIntroMessage] = useState(0);

  const [onIntro, setOnIntro] = useState(true);
  const [onActions, setOnActions] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClickContainer() {
    inputRef.current?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      setHistory((prev) => [...prev, input]);

      switch (input.trim().toLowerCase()) {
        case '--logbook':
        case '--bitacora':
        case '--bitácora':
          router.push(`${lang}/logbook`);
          break;
        case '--contact':
        case '--contacto':
          router.push(`${lang}/#contact`);
          break;
        case '--clear':
        case '--borrar':
          setHistory([]);
          setOnIntro(false);
          break;
        case '--help':
        case '--ayuda':
          setHistory((prev) => [...prev, data.commands.help]);
          break;
        default:
          setHistory((prev) => [...prev, data.commands.notFound]);
          break;
      }

      setInput('');
    }
  }

  useEffect(() => {
    if (indexIntroMessage < data.intro.length) {
      const timeoutId = setTimeout(() => {
        setIntroMessage((prev) => prev + data.intro.charAt(indexIntroMessage));
        setIndexIntroMessage(indexIntroMessage + 1);
      }, 50);
      return () => clearTimeout(timeoutId);
    } else {
      setOnActions(true);
    }
  }, [indexIntroMessage, data.intro]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="flex justify-center items-center bg-galaxy-gradient-light dark:bg-galaxy-gradient-dark -mt-20 pt-28 pb-5">
      <div className="container">
        <div className="bg-gray-800 dark:bg-black rounded-lg shadow-lg overflow-hidden w-full">
          <div className="bg-gray-600 dark:bg-gray-800 text-gray-300 p-3 flex items-center space-x-2 w-full">
            <span className="block w-3 h-3 rounded-full bg-red-500"></span>
            <span className="block w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="block w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <div
            ref={containerRef}
            onClick={handleClickContainer}
            className="px-3 py-6 sm:px-6 h-[340px] md:h-[480px] overflow-auto scroll-smooth focus:scroll-auto"
          >
            {onIntro ? (
              <pre className="font-mono whitespace-pre-wrap text-xs sm:text-base leading-5 sm:leading-7 flex justify-start items-start gap-1">
                <Prompt />
                <Command command={introMessage} />
              </pre>
            ) : null}
            {onActions ? (
              <>
                <pre className="font-mono whitespace-pre-wrap text-xs sm:text-base leading-5 sm:leading-7">
                  {history.map((command, indexIntroMessage) => (
                    <div
                      className="flex justify-start items-start gap-1"
                      key={indexIntroMessage}
                    >
                      <Prompt />
                      <Command command={command} />
                    </div>
                  ))}
                </pre>
                <pre className="font-mono whitespace-pre-wrap text-xs sm:text-base leading-5 sm:leading-7">
                  <div className="flex justify-start items-start gap-1">
                    <Prompt />
                    <input
                      type="text"
                      value={input}
                      ref={inputRef}
                      className="bg-transparent text-gray-300 outline-none flex-1"
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      autoFocus
                    />
                  </div>
                </pre>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
