import Contact from '@/components/sections/contact';
import Education from '@/components/sections/education';
import Expertise from '@/components/sections/expertise';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';

export default function CV() {
  return (
    <>
      <Hero text={`Ender Puentes 👾\n   Curriculum 📃`} />
      <Skills />
      <Expertise />
      <Education />
      <Contact />
    </>
  );
}
