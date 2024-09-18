import { urlFor } from '@/services/sanity/lib/image';
import { IdentitySchema } from '@/services/sanity/parser';
import Image from 'next/image';
import Link from 'next/link';
import {
  PiGithubLogo,
  PiGlobe,
  PiLinkedinLogo,
  PiMailbox,
  PiMapPin,
  PiTelegramLogo,
} from 'react-icons/pi';

type Props = { data: IdentitySchema };

export function IdentityPdf({ data }: Props) {
  return (
    <div className="bg-slate-100 bg-galaxy-gradient-dark">
      <div className="container flex justify-start items-center gap-5 py-5">
        <div className="w-[260px] flex justify-center items-center">
          <div className="w-[200px] h-[200px] overflow-hidden rounded-full flex justify-center items-center">
            <Image
              src={urlFor(data.image).url()}
              width={1080}
              height={1080}
              alt="Ender Puentes"
              quality={1}
            />
          </div>
        </div>
        <div className="flex-1 py-8">
          <h1 className="text-3xl font-bold mb-2 text-white">{data.name}</h1>
          <h2 className="text-md mb-2 text-gray-200">{data.role}</h2>
          <div className="grid grid-cols-3 gap-5 text-white text-xs pt-10">
            <span className="flex justify-start items-center gap-2">
              <PiMapPin className="text-lg" /> Buenos Aires, Argentina
            </span>
            <span className="flex justify-start items-center gap-2">
              <PiMailbox className="text-lg" />{' '}
              <Link
                aria-label={data.contact.email.label}
                href={data.contact.email.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.contact.email.label}
              </Link>
            </span>
            <span className="flex justify-start items-center gap-2">
              <PiGlobe className="text-lg" />
              <Link
                aria-label={data.contact.website.label}
                href={data.contact.website.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.contact.website.label}
              </Link>
            </span>
            <span className="flex justify-start items-center gap-2">
              <PiTelegramLogo className="text-lg" />
              <Link
                aria-label={data.contact.telegram.label}
                href={data.contact.telegram.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.contact.telegram.label}
              </Link>
            </span>
            <span className="flex justify-start items-center gap-2">
              <PiLinkedinLogo className="text-lg" />
              <Link
                aria-label={data.contact.linkedin.label}
                href={data.contact.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.contact.linkedin.label}
              </Link>
            </span>
            <span className="flex justify-start items-center gap-2">
              <PiGithubLogo className="text-lg" />
              <Link
                aria-label={data.contact.github.label}
                href={data.contact.github.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.contact.github.label}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
