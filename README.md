vithalagrawal.com
Hey there 👋 I'm Vithal — builder, researcher, and full-time experimenter.
This is my digital lab: vithalagrawal.com.
It’s equal parts portfolio, playground, and late-night debug zone. Currently still in its MVP stage, but evolving fast — kind of like my projects.
You’ll find my work across AI healthcare (SaathiCare 🩺), biosensor innovation (SynBioGuard 🧬), and particle physics (Beamline for Schools ⚛️). The site doubles as my sandbox for testing design systems, TypeScript quirks, and some over-engineered animations I’ll probably rewrite next week.
Want to talk about how something here was built or just nerd out about AI, bioengineering, or web systems?
Drop me a message: hello@vithalagrawal.com.
My friends are tired of hearing about CSS animations and GEANT4 detectors, so you’d actually be doing them a favor.
🧰 Tech Stack I Love
In no particular order, here are the tools and libraries that make this site (and most of my projects) tick:
Once you go TypeScript, there’s no going back.
Frontend built with Next.js, hosted on Vercel.
Styling powered by TailwindCSS — fast, clean, and surprisingly aesthetic.
Animations via Framer Motion (still deciding if it beats React Spring).
State management made painless with Zustand.
3D and motion graphics experiments using Three.js + React Three Fiber.
Quick prototyping of UI variables in-browser with Leva.
Accessibility utilities with react-aria.
SEO handled by next-seo.
CMS integration using Sanity with sanity-codegen for end-to-end typesafety.
Fun fact: half the magic here comes from the brilliant people at pmndrs. Legends.
⚙️ Dev
It’s a semi-monorepo with frontend/ and backend/ directories — both tightly coupled for typesafety and version control.
Frontend – Next.js
For now, I’m sticking with Next.js since I plan to expand this beyond a static portfolio — maybe integrate live demos, research blogs, or interactive 3D explainers.
# Build and check for deploy issues
yarn build
# Run locally
yarn dev
Backend – Sanity
All content (projects, blogs, experiments) comes from Sanity CMS.
If you change schemas, regenerate your types:
# Sanity commands
yarn dev
yarn deploy
yarn build

# Regenerate frontend-safe types
yarn build:types
