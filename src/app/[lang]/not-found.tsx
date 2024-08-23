import Link from 'next/link';

function Start() {
  return (
    <span
      className="absolute bg-white rounded-full"
      style={{
        width: `${Math.random() * 3}px`,
        height: `${Math.random() * 3}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`,
        opacity: Math.random(),
      }}
    />
  );
}

export default function NotFound() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center -mt-20">
      <div className="text">
        <h2 className="text-xl font-bold mb-5">Señal Perdida</h2>
        <p className="text-xs sm:text-base">
          No pudimos localizar el recurso solicitado
        </p>

        <Link
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 max-w-80 mx-auto mt-5 sm:mt-10 text-xs sm:text-sm"
          href="/logbook"
        >
          Regresar a la estación
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(200)].map((_, i) => (
          <Start key={i} />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900 via-indigo-700 to-black opacity-70 mix-blend-overlay"></div>
    </section>
  );
}