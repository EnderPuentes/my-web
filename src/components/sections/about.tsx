import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

type Props = {};

export default function About({}: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="font-semibold text-lg sm:text-xl">
              Sobre mí
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <p className="text-xs sm:text-base leading-6 sm:leading-7">
              Soy un desarrollador proactivo y apasionado con 8 años de carrera
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
              <br />
              <br />
              Si deseas conocer más sobre mi trayectoria profesional y
              académica, te invito a:
            </p>
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 max-w-40 mx-auto mt-5 sm:mt-10 text-xs sm:text-sm"
              href="/cv"
            >
              Ver curriculum
            </Link>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
}
