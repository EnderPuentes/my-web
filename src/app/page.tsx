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
        text={`Conectando con ${city} ${flag}...\nBienvenido, terrícola, a mi estación 🧑🏻‍🚀.\nSoy Ender Puentes. 👾`}
      />
      <About />
      <Contact />
    </>
  );
}
