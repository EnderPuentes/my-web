import { Locale } from '@/types/locales';
import Link from 'next/link';
import { PiGithubLogoBold, PiLinkedinLogoBold } from 'react-icons/pi';

type Props = { t: Locale['layout']['footer'] };

export default function Footer({ t }: Props) {
  const date = new Date();
  return (
    <footer className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center gap-10 py-10 px-5">
        <h1 className="text-xl text-center">{t.socialMedia.title}</h1>
        <div className="flex justify-center items-center gap-4">
          <Link
            aria-label="Linkedin"
            className="text-4xl"
            target="_blank"
            href="https://www.linkedin.com/in/enderpuentes/"
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
