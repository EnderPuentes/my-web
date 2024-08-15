import Link from 'next/link';
import { PiGithubLogoBold, PiLinkedinLogoBold } from 'react-icons/pi';

type Props = {};

export default function Footer({}: Props) {
  const date = new Date();
  return (
    <footer className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center gap-7 py-10">
        <h1 className="text-xl">
          ¡Conéctate conmigo y mantengamos el contacto!
        </h1>
        <div className="flex justify-center items-center gap-4">
          <Link
            aria-label="Linkedin"
            className="text-4xl"
            target="_blank"
            href="https://www.linkedin.com/in/enderpuents-dev/"
          >
            <PiLinkedinLogoBold />
          </Link>
          <Link
            aria-label="Github"
            className="text-4xl"
            target="_blank"
            href="https://github.com/EnderPuentes"
          >
            <PiGithubLogoBold />
          </Link>
        </div>
      </div>
      <div className="container p-2 flex justify-center items-center">
        <p className="text-xs">
          Ender Puentes - © Copyright {date.getFullYear()}
        </p>
      </div>
    </footer>
  );
}
