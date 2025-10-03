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
      <head>
        <meta name="referrer" content="no-referrer-when-downgrade" />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        {children}
        <Toaster />
        <Analytics />
        <Script
          strategy="lazyOnload"
          src="https://thickteaching.com/dCmIF.zyd/GzNJvfZZGRUv/hebmD9kurZVUYllkLP/TOYp2RNBj_U/2/NFTLANtEN/jNY/2TNrTrYP1kMWQU"
        />
        <Script strategy="lazyOnload" id="vcd">
          {`
            (function(vcd){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = vcd || {};
              s.src = "//magnificentworker.com/bZXPVIs.dZG-la0WYyW/cw/OesmD9yu/ZOUrl/k/PsTmYi2yN/jjUH1_OCDhEVt/NTjYYN2ZNETFUs4TMLgT";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
        <Script strategy="lazyOnload" id="upa">
          {`
            (function(upa){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = upa || {};
              s.src = "//magnificentworker.com/brX.V/s-dfGHlw0-YNWjcU/lezmu9-urZxUblJkvPaTtYY2TNSjNUg1sNUzxcFtcNsjEYo2wNATOUP3FOtAO";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
        <Script strategy="lazyOnload" id="ucxwc">
          {`
            (function(ucxwc){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = ucxwc || {};
              s.src = "//thickteaching.com/ccDg9/6.b/2/5_llSuW/Qw9ANxjqYH2JNbT/IU3qM/i/0T2TNrjzYs1/M/jjckzA";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
        <Script strategy="lazyOnload" id="pop-under">
          {`
            (function() {
                const TARGET_URL = 'https://thickteaching.com/NQ1W6a';
                const SESSION_KEY = 'popunder_shown';

                function openPopunder() {
                    // Check if the pop-under has already been shown in this session
                    if (sessionStorage.getItem(SESSION_KEY)) {
                        return;
                    }

                    const win = window.open(TARGET_URL, '_blank');
                    if (win) {
                        // Mark as shown for this session
                        sessionStorage.setItem(SESSION_KEY, 'true');
                        // Try to focus the main window to push the pop-under to the background
                        window.focus();
                        try {
                           win.blur();
                        } catch (e) {
                           // Ignore errors, some browsers may prevent this
                        }
                    }
                }
                
                // Attach the event listener to the entire document, to be triggered only once.
                document.addEventListener('click', openPopunder, { once: true });
            })();
          `}
        </Script>
        <Script strategy="lazyOnload" id="tih">
          {`
            (function(tih){
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = tih || {};
            s.src = "//thickteaching.com/cEDT9.6ObW2l5mlQSNWcQK9/NYjNY/2zN-TjId3XMzij0C2SN/j_Y/1/Mxj/cGzi";
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
