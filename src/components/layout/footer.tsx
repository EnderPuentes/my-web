import Link from 'next/link';
import { PiGithubLogo, PiLinkedinLogo, PiTwitterLogo } from 'react-icons/pi';

type Props = {};

export default function Footer({}: Props) {
  const date = new Date();
  return (
    <footer className="flex flex-col justify-center items-center gap-5">
      <div className="flex justify-center items-center gap-4">
        <Link
          aria-label="Linkedin"
          className="text-2xl"
          target="_blank"
          href="https://www.linkedin.com/in/enderpuents-dev/"
        >
          <PiLinkedinLogo />
        </Link>
        <Link
          aria-label="Twitter"
          className="text-2xl"
          target="_blank"
          href="https://twitter.com/EnderPuents"
        >
          <PiTwitterLogo />
        </Link>
        <Link
          aria-label="Github"
          className="text-2xl"
          target="_blank"
          href="https://github.com/EnderPuentes"
        >
          <PiGithubLogo />
        </Link>
      </div>
      <div className="container p-2 flex justify-center items-center">
        <p className="text-xs">
          Ender Puentes - © Copyright {date.getFullYear()}
        </p>
      </div>
    </footer>
  );
}
