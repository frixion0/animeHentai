import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Seamless Viewer',
  description: 'Seamlessly view your favorite websites.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="monetag" content="ed85afb75b5845ce30362b00811dad14" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Analytics />
        <Script 
          src="//fpyf8.com/88/tag.min.js"
          data-zone="175053"
          strategy="lazyOnload"
        />
        <Script 
          src="//fpyf8.com/88/tag.min.js"
          data-zone="175052"
          strategy="lazyOnload"
        />
        <Script 
          src="//fpyf8.com/88/tag.min.js"
          data-zone="175051"
          strategy="lazyOnload"
        />
        <Script 
          src="//fpyf8.com/88/tag.min.js"
          data-zone="175050"
          strategy="lazyOnload"
        />
        <Script 
          src="//fpyf8.com/88/tag.min.js"
          data-zone="175036"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
