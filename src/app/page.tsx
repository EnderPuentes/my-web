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
        text={`Bienvenido terrícola 🌎\n   Gracias por visitarnos desde ${city} ${flag}\n   \n   \n   \n   Ender Puentes 👾`}
      />
      <About />
      <Contact />
    </>
  );
}
