import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {};

export default function About({}: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5">
        <Card>
          <CardHeader>
            <CardTitle className="font-semibold text-xl">Sobre mí</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <p className="text-base leading-7">
              Soy un desarrollador proactivo y apasionado con 7 años de carrera
              profesional en el campo del desarrollo de software. He trabajado
              con diversos lenguajes de programación, enfocado principalmente en
              el desarrollo de aplicaciones web. Mi experiencia incluye la
              creación de soluciones técnicas sólidas y escalables, abordando
              desafíos de manera creativa y eficiente.
              <br />
              <br />
              He descubierto una gran pasión por los productos digitales, y me
              esfuerzo por garantizar que cada característica que desarrollo no
              solo cumpla, sino que supere las expectativas. Destaco por mi
              habilidad para colaborar en equipos multidisciplinarios y trabajar
              bajo presión, mostrando empatía y un firme compromiso con los
              objetivos del proyecto.
            </p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
}
