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
    description: 'Founded SaathiCare, an AI-powered healthcare platform that addresses critical gaps in rural Indian healthcare accessibility. Built sophisticated natural language processing systems using spaCy NLP for accurate symptom triage and diagnosis support. Developed text-to-speech (TTS) capabilities to serve illiterate populations, ensuring the platform is accessible to all. Successfully screened over 5,000 patients across multiple Indian states, identifying 500+ critical health risks that may have otherwise gone undetected. Secured $10k in seed funding and ensured accurate medical translations across 10+ Indian languages including Hindi, Tamil, Telugu, Bengali, and Marathi. Collaborated with nonprofit clinics and rural healthcare workers to deploy the solution in underserved communities.',
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
    description: 'Designed and developed NightVisionX, a government-backed AI-powered obstacle detection system that enhances safety for commercial truck drivers operating in low-light conditions. Leveraged computer vision and deep learning algorithms to detect obstacles, pedestrians, and potential hazards using low-cost camera systems that make the technology accessible. Successfully deployed the system across 700+ commercial trucks throughout India, working directly with logistics companies and transportation authorities. The deployment resulted in a 31% reduction in nighttime highway crashes, potentially saving hundreds of lives. Estimated to generate $45K in initial revenue while receiving official backing from India\'s Ministry of Transport. Conducted extensive field testing, developed partnerships with logistics companies, and ensured the technology works reliably across diverse road conditions and weather scenarios.',
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
    description: 'Served as a founding engineer for IntoxiWatch, an AI-powered system designed to detect individuals who may be too intoxicated and require assistance in bars and restaurants. Developed a CNN (Convolutional Neural Network) model for alcohol detection, working at the intersection of computer vision, public safety, and social responsibility. Successfully deployed the application-based alcohol detection system in 20+ clubs and restaurants, helping establishments better manage customer safety. Expanded the initiative beyond technology by creating comprehensive training courses for bartenders on safe serving practices and responsible alcohol management. The project demonstrates a thoughtful approach to using technology for public good while addressing real-world social challenges in hospitality environments.',
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
    description: 'Founded and led India\'s first high school iGEM (International Genetically Engineered Machine) synthetic biology team, establishing a new pathway for young Indian scientists in synthetic biology. Engineered a comprehensive biological water-purification system designed to address contamination challenges in rural Indian communities. Managed all aspects of the team including wet lab experiments, where I directed complex biological engineering protocols and ensured rigorous scientific methodology. Coordinated extensive outreach initiatives to educate communities about synthetic biology and water safety. Led fundraising efforts to secure resources for laboratory equipment, materials, and team participation in the international competition. Successfully managed a team of 22 peers, fostering collaboration across disciplines and mentoring younger students in scientific research and leadership.',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'igem' },
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 0, g: 255, b: 100 } }, // biology green
  } as unknown as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-6',
    title: 'SFCC & SFLML – $325K+ Raised for Mental Health & Rural Education',
    shortTitle: 'SFCC & SFLML',
    subTitle: 'Finance Head',
    // @ts-ignore mock description
    description: 'Finance Head – Students for Collaborative Change (SFCC) & Students for Last Mile Learning (SFLML) Served as Finance Head for two large-scale student-led social impact initiatives addressing mental health and rural education across India. Under SFLML, recognized by Noble World Records for organizing the Largest Fundraiser for Rural Education by High School Students. Managed financial operations, secured corporate social responsibility (CSR) partnerships, and led national outreach efforts that raised $185,000, supporting the education of 1,200+ rural students for an entire academic year. Through SFCC, co-led a $140,000+ national campaign addressing India’s student suicide crisis in Kota, coordinating a 24-hour live event featuring psychologists, educators, and student leaders. The initiative enabled the deployment of 1,000+ therapists to schools and community centers, building sustainable support networks and promoting national awareness around youth mental health.',
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
    description: 'Co-founded Project Roshni, a solar energy access initiative that addresses electricity poverty in rural Indian communities. Led the innovative repurposing of 250 discarded solar panels, transforming what would have been waste into functional renewable energy systems. The project successfully electrified 120 villages, bringing clean, sustainable electricity to over 25,000 residents who previously relied on dangerous kerosene lamps. This initiative not only improved quality of life through reliable lighting but also significantly reduced environmental impact by cutting approximately 400 tons of CO2 emissions annually. The project received official recognition from regional government authorities for its innovative approach to renewable energy and rural development. Managed logistics, technical implementation, and community engagement to ensure the solar systems were properly installed and maintained.',
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
    description: 'Elected School Captain of Jayshree Periwal International School, serving a student body of over 2,500 students and representing the highest level of student leadership. Led major inter-school competitions including IB League and Spark, coordinating events that brought together 20+ international schools and over 900 participants. Managed complex logistics including venue coordination, participant registration, competition scheduling, and cross-school communications. Secured sponsorships and partnerships to ensure events were well-funded and impactful. Introduced tech-driven innovations including NFC cards for seamless networking, digital registration systems, and innovative event management platforms. Organized workshops and skill development programs, helped organize mental health awareness events, and established academic support groups to improve school-wide engagement and well-being. Mentored junior leaders and learned valuable lessons in public speaking, conflict resolution, and inclusive leadership.',
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
    description: 'Founded SynBioGuard Innovations to tackle unsafe drinking water access in rural India using synthetic biology and biosensing technology. Invented and filed a patent for the LuccKey biosensor, a low-cost, rapid E.coli detection system that enables quick contamination identification in water sources. The biosensor leverages synthetic biology principles to create a practical, field-deployable solution for water safety testing. Successfully deployed the technology across rural Indian communities, reaching over 20,000 people and resulting in a 40% reduction in waterborne illnesses. Led comprehensive R&D efforts including laboratory design, prototype development, and field testing in real-world conditions. Established strategic partnerships with healthcare organizations and local governments to scale the solution.',
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
    description: 'Invented an AI-powered haptic feedback device designed to assist blind and visually impaired individuals with navigation and spatial awareness. Developed a comprehensive system combining Python-based AI algorithms with microcontroller hardware to create an intuitive haptic feedback belt. The device processes environmental data and provides tactile feedback through vibration patterns, helping users navigate obstacles and understand their surroundings. Conducted rigorous user testing with 15 blind and visually impaired individuals, gathering feedback to iterate and improve the design. Validated the device\'s effectiveness and user experience through structured testing protocols. Presented research findings and technical methodology at a national conference, contributing to the accessibility technology field. The project demonstrates innovation at the intersection of AI, hardware engineering, and assistive technology, with a focus on real-world impact for people with disabilities.',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'haptic-belt' },
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 150, g: 0, b: 255 } }, // accessibility purple
  } as unknown as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-11',
    title: 'GramCarbon – Carbon Finance Platform for Agricultural Sustainability',
    shortTitle: 'GramCarbon',
    subTitle: 'Founder',
    // @ts-ignore mock description
    description: 'Currently developing GramCarbon, an ongoing carbon finance initiative that enables farmers to earn verified carbon credits through sustainable agricultural practices. The project focuses on clean cookstove deployment and Alternate Wetting and Drying (AWD) rice cultivation — both proven methods to reduce greenhouse gas emissions and enhance soil sustainability. Collaborating with Dr. Angelo Gurgel, an MIT researcher in agricultural economics and climate policy, to refine carbon modeling methodologies and improve emission-reduction accuracy. Building transparent monitoring systems and working with rural cooperatives to pilot the platform, GramCarbon aims to align rural livelihoods with climate action, demonstrating how innovative finance can empower farmers while mitigating carbon emissions.',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'gramcarbon' },
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 50, g: 200, b: 100 } }, // carbon/sustainability green
  } as unknown as Project,
];
