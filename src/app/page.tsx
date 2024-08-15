import About from '@/components/common/about';
import Contact from '@/components/common/contact';
import Education from '@/components/common/education';
import Expertise from '@/components/common/expertise';
import Hero from '@/components/common/hero';
import Skills from '@/components/common/skills';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Expertise />
      <Education />
      <Contact />
    </>
  );
}
