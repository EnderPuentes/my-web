'use client';

import { Classic } from '@theme-toggles/react';
import '@theme-toggles/react/css/Classic.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type Props = {};

export default function ThemeToggler({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    // @ts-ignore
    <Classic
      className="h-10 w-10 text-xl flex justify-center items-center"
      duration={1000}
      toggled={resolvedTheme === 'dark'}
      toggle={() => toggleTheme()}
    />
  );
}
