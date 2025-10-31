import { Project } from '../generatedSanitySchemaTypes';

export const mockProjects: Project[] = [
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-1',
    title: 'SaathiCare – AI-Powered Multilingual Healthcare for Underserved Indians',
    shortTitle: 'SaathiCare',
    subTitle: 'Founder, AI Lead & Social Impact Technologist',
    // @ts-ignore mock description
    description: 'Founder of AI healthcare app using spaCy NLP and TTS, screening 5K+ patients; $10k seed; ensured accurate translations in 10+ Indian languages.',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'saathicare' },
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 0, g: 150, b: 255 } }, // healthcare blue
  } as unknown as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-2',
    title: 'NightVisionX – Govt-Backed AI Safety Tech Deployed in 700+ Trucks Across India',
    shortTitle: 'NightVisionX',
    subTitle: 'Founder & Lead Engineer – AI Obstacle Detection',
    // @ts-ignore mock description
    description: 'Built govt-backed AI night-vision system using low-cost cameras; deployed on 700+ trucks, reducing highway crashes by 31%.',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'nightvisionx' },
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 255, g: 100, b: 0 } }, // safety orange
  } as unknown as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-3',
    title: 'IntoxiWatch - Alcohol Detection System',
    shortTitle: 'IntoxiWatch',
    subTitle: 'Founding Engineer',
    // @ts-ignore mock description
    description: 'App based alcohol detector deployed in 20+ clubs; building bartender courses on safe serving; blended technical innovation with real-world responsibility.',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'intoxiwatch' },
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 200, g: 50, b: 200 } }, // purple
  } as unknown as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-4',
    title: 'India\'s 1st High School iGEM Synthetic Biology Team',
    shortTitle: 'iGEM Team',
    subTitle: 'Founder & Team Leader',
    // @ts-ignore mock description
    description: 'Founded & led India\'s 1st HS iGEM team; engineered water-purification system, directed wet lab, outreach, fundraising, 22 peers.',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'igem' },
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 0, g: 255, b: 100 } }, // biology green
  } as unknown as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-5',
    title: 'Saraf Capital – AI Trading Algorithm with 25% Returns',
    shortTitle: 'Saraf Capital',
    subTitle: 'Portfolio Manager & Lead Developer',
    // @ts-ignore mock description
    description: 'Developed Python algorithm using LSTM neural networks and pandas-based backtesting to generate 25% annualized returns; guided 200+ investors with live trading simulations.',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'saraf-capital' },
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 255, g: 215, b: 0 } }, // finance gold
  } as unknown as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-6',
    title: 'SFCC & SFLML – $325K+ Raised for Mental Health & Rural Education',
    shortTitle: 'SFCC & SFLML',
    subTitle: 'Finance Head',
    // @ts-ignore mock description
    description: 'Raised $325K+ for wellness & rural schools; funded 550 schools/16.5K students, stationed 1K+ therapists, led India\'s largest wellness event.',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'sfcc-sflml' },
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 255, g: 50, b: 100 } }, // social impact pink
  } as unknown as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-7',
    title: 'Project Roshni – Solar Energy Access Initiative',
    shortTitle: 'Project Roshni',
    subTitle: 'Co-Founder',
    // @ts-ignore mock description
    description: 'Repurposed 250 solar panels, electrifying 120 villages & 25K+ residents, replacing kerosene lamps & cutting 400 tons CO2; govt-recognized.',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'project-roshni' },
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 255, g: 200, b: 0 } }, // solar yellow
  } as unknown as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-8',
    title: 'School Captain – Jayshree Periwal International School',
    shortTitle: 'School Captain',
    subTitle: 'Student Government Leadership',
    // @ts-ignore mock description
    description: 'Elected School Captain; led IB League & Spark, managing 20+ schools/900+ participants, logistics, sponsorships & tech-driven innovations.',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'school-captain' },
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 100, g: 100, b: 255 } }, // leadership blue
  } as unknown as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-9',
    title: 'SynBioGuard Innovations – Biosensors for Safe Water Access',
    shortTitle: 'SynBioGuard',
    subTitle: 'Founder & Lead Bioengineer',
    // @ts-ignore mock description
    description: 'Developed patent-pending LuccKey biosensor for E.coli detection. Impacted rural Indian communities, reducing waterborne illnesses by 40%.',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'synbioguard' },
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 0, g: 200, b: 150 } }, // water blue-green
  } as unknown as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-10',
    title: 'AI Powered Haptic Feedback Device for the Blind',
    shortTitle: 'Haptic Belt',
    subTitle: 'Inventor',
    // @ts-ignore mock description
    description: 'Designed Python + microcontroller-based haptic belt to assist blind navigation; tested with 15 users; presented findings at a national conference.',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'haptic-belt' },
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 150, g: 0, b: 255 } }, // accessibility purple
  } as unknown as Project,
];
