'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://freeaigenerator.vercel.app/';
  }, []);

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-background text-foreground">
      <p>Redirecting to https://freeaigenerator.vercel.app/...</p>
    </main>
  );
}
