import Contact from '@/components/sections/contact';
import Education from '@/components/sections/education';
import Expertise from '@/components/sections/expertise';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';

type Props = {
  searchParams: {
    city: string;
    flag: string;
  };
};

export default function CV({ searchParams }: Props) {
  const { city, flag } = searchParams;
  return (
    <>
      <Hero
        text={`Obteniendo bitácora espacial...\n\nNombre: Ender Puentes 👾\nMisión: Software Developer 💻\nCentro de Operaciones: Aerolab 🛰️`}
      />
      <Skills />
      <Expertise />
      <Education />
      <Contact />
    </>
  );
}
