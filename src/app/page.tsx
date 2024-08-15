import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';

export default function Home() {
  return (
    <>
      <Hero text={`Ender Puentes 👾\n   Software Developer 💻`} />
      <About />
      <Contact />
    </>
  );
}
