import Link from 'next/link';
import ThemeToggler from './theme-toggler';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 border-b bg-background z-50 shadow-sm h-20 flex justify-center items-center">
      <div className="container flex justify-between items-center">
        <Link href={'/'} className="flex justify-start items-start flex-col">
          <h1 className="text-2xl">
            En<strong className="font-bold">dev</strong>_
          </h1>
          <p className="text-xs">Ender Puentes</p>
        </Link>
        <ThemeToggler />
      </div>
    </header>
  );
}
