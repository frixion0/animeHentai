'use client';

import { useState, type ReactNode } from 'react';

export function Body({ children }: { children: ReactNode }) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount % 5 === 0 && newCount > 0) {
      window.open('https://hollowsuspicion.com/bf1en54bic?key=c23b11cbbfa4f1cc58457a9ad2ee4fe1', '_blank');
    }
  };

  return (
    <body className="font-body antialiased" onClick={handleClick}>
      {children}
      <div className="fixed bottom-2 right-2 rounded-md bg-black bg-opacity-50 px-2 py-1 text-xs font-mono text-white">
        {clickCount}
      </div>
    </body>
  );
}
