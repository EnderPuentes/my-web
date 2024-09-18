'use client';

import '@/app/globals.css';
import { useSearchParams } from 'next/navigation';

type Props = {
  site: React.ReactNode;
  pdf: React.ReactNode;
};

export default function LangLayout({ site, pdf }: Readonly<Props>) {
  const searchParams = useSearchParams();
  const isPdf = searchParams.get('pdf');
  return isPdf ? pdf : site;
}
