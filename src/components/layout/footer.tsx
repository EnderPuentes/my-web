import { FooterSchema } from '@/services/sanity/parser';
import Link from 'next/link';
import {
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiTelegramLogoBold,
  PiXLogoBold,
} from 'react-icons/pi';

type Props = { data: FooterSchema | null | undefined };

export default function Footer({ data }: Props) {
  const date = new Date();
  return (
    <footer className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center gap-10 py-10 px-5">
        <h1 className="text-lg sm:text-xl text-center">
          {data?.socialMedia.title}
        </h1>
        <div className="flex justify-center items-center gap-4">
          {data?.socialMedia?.linkedin && (
            <Link
              aria-label="Linkedin"
              className="text-3xl sm:text-4xl"
              target="_blank"
              href="https://www.linkedin.com/in/enderpuentes/"
            >
              <PiLinkedinLogoBold />
            </Link>
          )}
          {data?.socialMedia.github && (
            <Link
              aria-label="Github"
              className="text-3xl sm:text-4xl"
              target="_blank"
              href="https://github.com/enderpuentes"
            >
              <PiGithubLogoBold />
            </Link>
          )}
          {data?.socialMedia.telegram && (
            <Link
              aria-label="Telegram"
              className="text-3xl sm:text-4xl"
              target="_blank"
              href="https://t.me/enderpuentes"
            >
              <PiTelegramLogoBold />
            </Link>
          )}
          {data?.socialMedia.x && (
            <Link
              aria-label="X"
              className="text-3xl sm:text-4xl"
              target="_blank"
              href="https://x.com/enderpuents"
            >
              <PiXLogoBold />
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
