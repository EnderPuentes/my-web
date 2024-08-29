'use client';

import config from '@/config/sanity.config';
import { metadata, NextStudio } from 'next-sanity/studio';
import Head from 'next/head';

export default function AdminPage() {
  <Head>
    {Object.entries(metadata).map(([key, value]) => (
      <meta key={key} name={key} content={value} />
    ))}
  </Head>;
  return <NextStudio config={config} />;
}
