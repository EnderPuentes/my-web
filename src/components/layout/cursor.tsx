'use client';

import { useEffect, useState } from 'react';

export function CursorGradient() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="hidden dark:sm:block fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(26, 1, 77, 0.15), transparent 80%)`,
      }}
    />
  );
}
