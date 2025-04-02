import { FooterSchema } from "@/services/sanity/parser";
import Link from "next/link";
import {
  PiGithubLogo,
  PiLinkedinLogo,
  PiTelegramLogo,
  PiXLogo,
} from "react-icons/pi";

type Props = { data: FooterSchema | null | undefined };

export function Footer({ data }: Props) {
  const date = new Date();
  return (
    <footer className="bg-secondary">
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
      <div className="container flex flex-col justify-center items-center gap-4 p-2">
        <p className="text-xs">
          {data?.copyright} {date.getFullYear()}
        </p>
        <Link
          href={data?.sourceCode.href ?? ""}
          aria-label={data?.sourceCode.label}
          className="text-xs flex justify-center gap-4 items-center underline"
        >
          {data?.sourceCode.label}{" "}
        </Link>
      </div>
    </footer>
  );
}
