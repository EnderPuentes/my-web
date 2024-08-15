import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {};

type Skill = {
  title: string;
  technologies: string;
};

const skills: Skill[] = [
  {
    title: 'Lenguajes de Programación',
    technologies: 'Javascript, Typescript, PHP, Python, C++ (Académico).',
  },
  {
    title: 'Desarrollo Web',
    technologies:
      'React, Next.js, Vue, Nuxt.js, Sanity, Strapi, Laravel, Docker, CodeIgniter, CSS, SCSS, Styled Components, Tailwind CSS, Chakra UI, Shadcn UI. StoryBook',
  },
  {
    title: 'Servicios en la nube',
    technologies:
      'Vercel, Google Cloud, Dokku, CI (Gitlab, Github), S3, EC2 (AWS), Funciones Lambda.',
  },
  {
    title: 'Administración de Base de Datos',
    technologies: 'MSSQL, MySql, MariaDB, MongoDB, GraphQL, Prisma.',
  },
  {
    title: 'Gestión de Pruebas',
    technologies: 'Pruebas unitarias (Jest), pruebas de integración (Cypress)',
  },
  {
    title: 'DevOps',
    technologies: 'Apache, Nginx, CronJobs, Scripts Shells.',
  },
  {
    title: 'Gestión de proyecto',
    technologies:
      'Organización y gestión de Sprints, Documentación, Estimación de Tareas, Planificación de Releases, Actualización del Backlog.',
  },
];

export default function Skills({}: Props) {
  return (
    <section className="mb-10">
      <div className="container flex flex-col justify-start items-start gap-5">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="font-semibold text-xl">
              Habilidades técnicas
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {skills.map((skill, i) => (
              <>
                <div
                  key={i}
                  className="flex flex-col justify-start items-start gap-1"
                >
                  <div className="flex flex-col justify-start items-start gap-1 mb-2">
                    <p className="text-base dark:text-gray-300 font-bold">
                      {skill.title}
                    </p>
                    <p className="leading-7 text-base dark:text-gray-300">
                      {skill.technologies}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
}
