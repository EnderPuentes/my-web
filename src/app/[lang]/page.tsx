import { sharedMetadata } from '@/app/[lang]/shared-metadata';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

type Props = {
  searchParams: {
    city: string;
    flag: string;
  };
};

export const metadata: Metadata = {
  ...sharedMetadata,
  title: `${sharedMetadata.title}`,
};

export default function Home() {
  const cookieStore = cookies();

  const city = cookieStore.get('city')?.value || 'Buenos Airessssss';
  const flag = cookieStore.get('flag')?.value || '🇦🇷';

  return (
    <>
      <Hero
        text={`Conectando con ${city} ${flag}...\n\nHola, Soy Ender 👾\nBienvenido a mi estación 🧑🏻‍🚀\n\nExplora mi trayectoria y acompáñame en la búsqueda de nuevos desafíos 🚀`}
      />
      <About />
      <Contact />
    </>
  );
}
