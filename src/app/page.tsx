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
        text={`Bienvenido terrícola 🌎\n   Nos alegra mucho que estés visitándonos desde ${city} ${flag}\n   Soy Ender Puentes, ¡exploremos juntos! 👾`}
      />
      <About />
      <Contact />
    </>
  );
}
