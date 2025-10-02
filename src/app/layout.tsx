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
        <meta name="284a29da8e86fddb4e740c1ef6d272ec429e0201" content="284a29da8e86fddb4e740c1ef6d272ec429e0201" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Analytics />
        <Script id="new-ad-script" strategy="lazyOnload">
          {`
            (function(dmmt){
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = dmmt || {};
            s.src = "//thickteaching.com/cZD.9R6/ba2I5klfSCWuQk9CN/jAYG2pNnTWIj3kMliV0/2/NWjKYB1eMhj/c/zQ";
            s.async = true;
            s.referrerPolicy = 'no-referrer-when-downgrade';
            l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
      </body>
    </html>
  );
}
