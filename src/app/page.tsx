import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';

type Props = {
  searchParams: {
    city: string;
    flag: string;
  };
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
