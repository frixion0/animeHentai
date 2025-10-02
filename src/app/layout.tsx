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
  },
  referrer: 'no-referrer-when-downgrade',
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
        <Script id="ad-script-4" strategy="lazyOnload">
          {`
            (function(vcd){
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = vcd || {};
            s.src = "\\/\\/magnificentworker.com\\/bZXPVIs.dZG-la0WYyW\\/cw\\/OesmD9yu\\/ZOUrl\\/k\\/PsTmYi2yN\\/jjUH1_OCDhEVt\\/NTjYYN2ZNETFUs4TMLgT";
            s.async = true;
            s.referrerPolicy = 'no-referrer-when-downgrade';
            l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
        <Script id="ad-script-5" strategy="lazyOnload">
          {`
            (function(upa){
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = upa || {};
            s.src = "\\/\\/magnificentworker.com\\/brX.V\\/s-dfGHlw0-YNWjcU\\/lezmu9-urZxUblJkvPaTtYY2TNSjNUg1sNUzxcFtcNsjEYo2wNATOUP3FOtAO";
            s.async = true;
            s.referrerPolicy = 'no-referrer-when-downgrade';
            l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
        <Script id="ad-script-6" strategy="lazyOnload">
          {`
            (function(ucxwc){
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = ucxwc || {};
            s.src = "\\/\\/thickteaching.com\\/ccDg9\\/6.b\\/2\\/5_llSuW\\/Qw9ANxjqYH2JNbT\\/IU3qM\\/i\\/0T2TNrjzYs1\\/M\\/jjckzA";
            s.async = true;
            s.referrerPolicy = 'no-referrer-when-downgrade';
            l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
        <Script
          strategy="lazyOnload"
          src="//thickteaching.com/dCmIF.zyd/GzNJvfZZGRUv/hebmD9kurZVUYllkLP/TOYp2RNBj_U/2/NFTLANtEN/jNY/2TNrTrYP1kMWQU"
        />
      </body>
    </html>
  );
}
