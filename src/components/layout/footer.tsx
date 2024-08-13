type Props = {};

export default function Footer({}: Props) {
  const date = new Date();
  return (
    <footer className="h-10 flex justify-center items-center">
      <div className="container p-2 flex justify-center items-center">
        <p className="text-xs">
          Ender Puentes - Copyright {date.getFullYear()}
        </p>
      </div>
    </footer>
  );
}
