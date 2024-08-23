import { sharedMetadata } from '@/app/shared-metadata';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import { Metadata } from 'next';

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

export default function Home({ searchParams }: Props) {
  const { city, flag } = searchParams;
  return (
    <>
      <Hero
        text={`Conectando con ${city} ${flag}...\n\nBienvenido, terrícola, a mi estación 🧑🏻‍🚀\n¡Hola! Soy Ender Puentes 👾\n\n¡Disfrutemos juntos del viaje! 🚀`}
      />
      <About />
      <Contact />
    </>
  );
}
