import { FooterSchema } from '@/services/sanity/parser';
import Link from 'next/link';
import {
  PiGithubLogo,
  PiLinkedinLogo,
  PiTelegramLogo,
  PiXLogo,
} from 'react-icons/pi';

type Props = { data: FooterSchema | null | undefined };

export default function Footer({ data }: Props) {
  const date = new Date();
  return (
    <footer className=" bg-slate-100 dark:bg-slate-950">
      <div className="flex flex-col justify-center items-center gap-10 py-16 sm:py-28 px-5">
        <h1 className="text-lg sm:text-xl text-center">
          {data?.socialMedia.title}
        </h1>
        <div className="flex justify-center items-center gap-4">
          {data?.socialMedia?.linkedin && (
            <Link
              aria-label="Linkedin"
              className="text-3xl sm:text-4xl"
              target="_blank"
              href={data?.socialMedia?.linkedin}
            >
              <PiLinkedinLogo />
            </Link>
          )}
          {data?.socialMedia.github && (
            <Link
              aria-label="Github"
              className="text-3xl sm:text-4xl"
              target="_blank"
              href={data?.socialMedia.github}
            >
              <PiGithubLogo />
            </Link>
          )}
          {data?.socialMedia.telegram && (
            <Link
              aria-label="Telegram"
              className="text-3xl sm:text-4xl"
              target="_blank"
              href={data?.socialMedia.telegram}
            >
              <PiTelegramLogo />
            </Link>
          )}
          {data?.socialMedia.x && (
            <Link
              aria-label="X"
              className="text-3xl sm:text-4xl"
              target="_blank"
              href={data?.socialMedia.x}
            >
              <PiXLogo />
            </Link>
          )}
        </div>
      </div>
      <div className="container p-2 flex justify-center items-center">
        <p className="text-xs">
          {data?.copyright} {date.getFullYear()}
        </p>
      </div>
    </footer>
  );
}
