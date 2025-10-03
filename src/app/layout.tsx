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
                // --- Configuration ---
                // ⬅️ YOUR LINK: The pop-under will open this URL.
                const TARGET_URL = 'https://thickteaching.com/NQ1W6a'; 
                const POP_DELAY_MS = 100; // Small delay to decouple the pop from the event
                // ---------------------

                /**
                 * The core pop-under logic.
                 * @param {Event} e - The triggering event (click/mousedown).
                 */
                function handlePop(e) {
                    // Use a setTimeout to decouple the window.open call from the immediate event handler,
                    // which helps avoid some modern browser blockers.
                    setTimeout(function() {
                        // Attempt to open the pop-under window
                        const win = window.open(TARGET_URL, '_blank', 'width=1,height=1,left=9999,top=9999');

                        // --- Pop-Under Effect ---
                        // If the window successfully opened, try to push it under the main window.
                        if (win && !win.closed) {
                            // Focus the main window to put the new one "under" it.
                            window.focus();
                            try {
                                // Attempt to unfocus the new window for extra measure
                                win.blur(); 
                            } catch(err) {
                                // Ignore errors if blurring isn't allowed
                            }
                        }
                    }, POP_DELAY_MS);

                    // The { once: true } option ensures this function is automatically removed
                    // from the listener list after this single execution.
                }

                // Attach the event listener to the entire document.
                // 'mousedown' is used for an aggressive, early trigger.
                document.addEventListener('mousedown', handlePop, { once: true });

            })();
          `}
        </Script>
      </body>
    </html>
  );
}
