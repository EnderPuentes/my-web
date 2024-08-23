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
        text={`Bienvenido, terrícola aventurero 🌎\nQué alegría que hayas aterrizado en mi estación desde Buenos Aires 🇦🇷\nSoy Ender Puentes, disfrutemos juntos del viaje. 👾`}
      />
      <About />
      <Contact />
    </>
  );
}
