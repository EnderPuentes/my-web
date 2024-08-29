'use client';

import config from '@/config/sanity.config';
import { NextStudio } from 'next-sanity/studio';

export default function AdminPage() {
  return <NextStudio config={config} />;
}
