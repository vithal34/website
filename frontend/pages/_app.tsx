import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';
// import { useEventListener } from 'usehooks-ts';
import { CustomCursor } from '../src/CustomCursor';
import { ThreePage } from '../src/ThreePage';
import { SiteData } from '../src/SiteData';
import { MobileVhAsCssVar } from '../src/MobileVhAsCssVar';
import { useConsoleLogDevSignature } from '../src/useConsoleLogDevSignature';
import { PlayAllVideosOnClickInLowPowerMode } from '../src/usePlayAllVideosOnClickInLowPowerMode';
import { PasswordProtection } from '../src/PasswordProtection';

function MyApp({ Component, pageProps }: AppProps) {
  const siteData:SiteData = {
    startingScene: pageProps.scene ?? 'error',
    projects: pageProps.projects ?? null,
  };

  useConsoleLogDevSignature();

  // useEventListener('focusin', (e) => {
  //   console.log('focused on', e.target);
  // });

  const title = 'Vithal Agrawal | Founder';
  const description = 'AI Founder building healthcare, safety, and biotech solutions. SaathiCare (50K+ served), NightVisionX (700+ trucks), SynBioGuard (WHO-recognized).';
  const url = 'https://vithalagrawal.com';

  return (
    <PasswordProtection>
      <DefaultSeo
        title={title}
        description={description}
        canonical="https://vithalagrawal.com"
        openGraph={{
          url,
          title,
          description,
          type: 'website',
          images: [
            {
              url: 'https://vithalagrawal.com/images/social.png',
              width: 2333,
              height: 1313,
              alt: 'Vithal Agrawal - Founder',
              type: 'image/png',
            },
          ],
          site_name: 'vithalagrawal.com',
        }}
        twitter={{
          handle: '@vithalagrawal',
          cardType: 'summary_large_image',
        }}
      />
      <MobileVhAsCssVar />
      <ThreePage
        siteData={siteData}
      />
      <Component {...pageProps} />
      <CustomCursor />
      <PlayAllVideosOnClickInLowPowerMode />
      <Analytics />
    </PasswordProtection>
  );
}

export default MyApp;
