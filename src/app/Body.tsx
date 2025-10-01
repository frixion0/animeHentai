'use client';

import { useRef, type ReactNode } from 'react';

export function Body({ children }: { children: ReactNode }) {
  const clickCount = useRef(0);

  const handleClick = () => {
    clickCount.current += 1;
    if (clickCount.current % 5 === 0) {
      window.open('https://hollowsuspicion.com/bf1en54bic?key=c23b11cbbfa4f1cc58457a9ad2ee4fe1', '_blank');
    }
  };

  return (
    <body className="font-body antialiased" onClick={handleClick}>
      {children}
    </body>
  );
}
