import { sharedMetadata } from '@/app/[lang]/shared-metadata';
import Contact from '@/components/sections/contact';
import Education from '@/components/sections/education';
import Expertise from '@/components/sections/expertise';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...sharedMetadata,
  title: `Mi bitácora - ${sharedMetadata.title}`,
  metadataBase: new URL(
    `${process.env.NEXT_PUBLIC_BASE_URL}/logbook` ?? '/logbook'
  ),
};

export default function Logbook() {
  return (
    <>
      <Hero
        text={`Obteniendo bitácora actual...\n\nNombre: Ender Puentes 👾\nMisión: Software Developer 💻\nCentro de Operaciones: Aerolab 🛰️\nUbicación: Buenos Aires 🇦🇷`}
      />
      <Skills />
      <Expertise />
      <Education />
      <Contact />
    </>
  );
}
