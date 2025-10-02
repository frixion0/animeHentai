import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Seamless Viewer',
  description: 'Seamlessly view your favorite websites.',
  other: {
    '284a29da8e86fddb4e740c1ef6d272ec429e0201': '284a29da8e86fddb4e740c1ef6d272ec429e0201',
    'referrer': 'no-referrer-when-downgrade',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-body antialiased`}>
        {children}
        <Toaster />
        <Analytics />
        <Script
          strategy="lazyOnload"
          src="//thickteaching.com/dDm.Fcz/dsGoNWvnZdGwUs/PelmE9kuuZeUJlNkjPgTpY/2WNVjJUe2fNFTUAktVN/jtY/2BNKT/Yd1tMuQW"
        />
        <Script id="ad-script-1" strategy="lazyOnload">
          {`
            (function(ezlmaf){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = ezlmaf || {};
              s.src = "\\/\\/magnificentworker.com\\/b.XOVTspdvG_lk0bYOWaco\\/peimS9SuKZvUslWkUPYTFYv2nN\\/j\\/U\\/1\\/OODdEPtrNej-YK2-NpTVUN4sMbgD";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
        <Script id="ad-script-2" strategy="lazyOnload">
          {`
            (function(zbns){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = zbns || {};
              s.src = "\\/\\/magnificentworker.com\\/bWXSVIs.dtGklG0oYjWAcI\\/yejmr9duhZnUClzkzP\\/T\\/Y\\/2ANgjdU\\/1\\/NfzPc\\/tONqjYYE2qNRT\\/U\\/3\\/O\\/AT";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
        <Script id="ad-script-3" strategy="lazyOnload">
          {`
            (function(kofz){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = kofz || {};
              s.src = "\\/\\/thickteaching.com\\/cLD\\/9v6fb.2\\/5\\/lUSXW-Qz9IN\\/jzYR2wNQT_I\\/3\\/MjiE0t2zNyj\\/Ym1sMdjZc\\/zu";
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
