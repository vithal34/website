import React, { Suspense } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { SiteData } from './SiteData';
import { CTA } from './CTA';
import { ForBotsOnly } from './ForBotsOnly';
import { aboutContent } from './aboutContent';
import { ProjectBody, ProjectHeader } from './ProjectContent';
import { CssSpinner } from './CssSpinner';

const DynamicThreeCanvas = dynamic(() => import('./ThreeCanvas'), {
  ssr: false,
});

export const ThreePage = ({ siteData }:{siteData:SiteData}) => (
  <>
      <Head>
      <title>Vithal Agrawal | Aspiring Blue Devil</title>
      <meta name="description" content="Vithal Agrawal - Founder, AI Technologist, Aspiring Blue Devil" />
      <link rel="icon" href="/images/favicon.png" />
    </Head>
    <main className="w-screen h-[calc(100*var(--vh))] font-sans overflow-hidden">
      <ForBotsOnly>
        <>
          <h1>Vithal Agrawal - Aspiring Blue Devil</h1>
          {aboutContent.intro.map((par) => <p key={par}>{par}</p>)}
          <h2>About</h2>
          <h3>Mission</h3>
          {aboutContent.mission.map((par) => <p key={par}>{par}</p>)}
          <h3>Testimonials</h3>
          <ul>
            {aboutContent.testimonials.map((testimonial) => (
              <li key={testimonial.quote}>
                <figure>
                  <blockquote>
                    {testimonial.quote}
                  </blockquote>
                  <figcaption>
                    –
                    {testimonial?.name}
                    ,
                    {testimonial?.title?.join(', ')}
                  </figcaption>
                </figure>
              </li>
            ))}

          </ul>
          <h3>Skills</h3>
          <ul>
            {aboutContent.skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
          <h2>Projects</h2>
          <ul>
            {siteData?.projects?.map((project) => (
              <li key={project?.title ?? ''}>
                <article>
                  <ProjectHeader project={project} />
                  <ProjectBody project={project} />
                </article>
              </li>
            )) ?? null}
          </ul>
        </>
      </ForBotsOnly>
      <CTA />
      {/* <div
          className={`
            fixed bottom-0 right-0 text-[1rem] px-[1rem] py-[1rem] font-mono
            text-black bg-yellow tracking-wide z-[88888888] sm:px-[2rem]
            ${showCTAs ? '' : 'translate-y-full'} transition-transform
          `}
          style={{
            filter: 'drop-shadow(0 0 0.2rem black) drop-shadow(0 0 0.2rem black)',
          }}
        >
          AVAILABLE: Q4
        </div> */}
      <Suspense
        fallback={(
          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <CssSpinner />
          </div>
        )}
      >
        <DynamicThreeCanvas siteData={siteData} />
      </Suspense>
    </main>
  </>
);
