type Props = {};

export default function About({}: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5">
        <h2 className="font-semibold text-lg sm:text-xl">Sobre mí</h2>
        <div className="w-full grid gap-4">
          <p className="text-xs sm:text-base leading-6 sm:leading-7 dark:text-gray-300">
            Soy un desarrollador proactivo y apasionado con 8 años de carrera
            profesional en el campo del desarrollo de software. He trabajado con
            diversos lenguajes de programación, enfocado principalmente en el
            desarrollo de aplicaciones web. Mi experiencia incluye la creación
            de soluciones técnicas sólidas y escalables, abordando desafíos de
            manera creativa y eficiente.
            <br />
            <br />
            He descubierto una gran pasión por los productos digitales, y me
            esfuerzo por garantizar que cada característica que desarrollo no
            solo cumpla, sino que supere las expectativas. Destaco por mi
            habilidad para colaborar en equipos multidisciplinarios y trabajar
            bajo presión, mostrando empatía y un firme compromiso con los
            objetivos del proyecto.
          </p>
        </div>
      </div>
    </section>
  );
}
