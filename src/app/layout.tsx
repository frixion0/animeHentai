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
        <Script id="ad-script-1" strategy="lazyOnload">
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
        <Script id="ad-script-2" strategy="lazyOnload">
          {`
            (function(rnc){
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = rnc || {};
            s.src = "//thickteaching.com/cDDj9.6GbC2o5ylkS/WHQQ9/N/jXYo2/NoTdIQ3jMLi/0X2ONfjYY/1hMDjkcSzd";
            s.async = true;
            s.referrerPolicy = 'no-referrer-when-downgrade';
            l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
        <Script id="ad-script-3" strategy="lazyOnload">
          {`
            (function(uqlf){
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = uqlf || {};
            s.src = "//magnificentworker.com/bjXXVDsfd.G_l/0aY/WjcP/hekmx9ru/ZrULl/kQPXT/Y/2/Nmj/Un1ENzzrcZtsNYjQYL2HNNT/Un3JOVAl";
            s.async = true;
            s.referrerPolicy = 'no-referrer-when-downgrade';
            l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
        <Script id="ad-script-4" strategy="lazyOnload">
          {`
            (function(drrwji){
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = drrwji || {};
            s.src = "//magnificentworker.com/blXAV.swdTGGlS0-YJWwcV/beVmL9wuVZTUWlKkNPYT/YD2sNDjrUA1SOQD/E_tNNbj/YT2NNeT/Uc4NMmgq";
            s.async = true;
            s.referrerPolicy = 'no-referrer-when-downgrade';
            l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
        <Script id="ad-script-5" strategy="lazyOnload">
          {`
            (function(palei){
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = palei || {};
            s.src = "//magnificentworker.com/b/XlVVsad.Gjld0MY/W_cI/Jepmb9nurZMU/lrk_P/TCYP2/N/jvUc1EO/DJUit/NvjOYr2VNtTRUM4LNygx";
            s.async = true;
            s.referrerPolicy = 'no-referrer-when-downgrade';
            l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>
        <Script id="ad-script-6" strategy="lazyOnload">
          {`
            (function(eazud){
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = eazud || {};
            s.src = "//thickteaching.com/c.Dj9F6kbi2/5pllS_WVQp9WN/jlYW2_NGTCIj3yM/iu0s2eNAj/Yz1UMwjocOzK";
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
