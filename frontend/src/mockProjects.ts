import { Project } from '../generatedSanitySchemaTypes';

export const mockProjects: Project[] = [
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-1',
    title: 'Handshake Project',
    shortTitle: 'Handshake',
    subTitle: 'Local mock content',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'handshake' },
    links: [
      { _key: 'l1', _type: 'link', text: 'Visit', url: 'https://example.com' },
    ],
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 0, g: 255, b: 255 } }, // cyan
  } as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-2',
    title: 'IIT Project',
    shortTitle: 'IIT',
    subTitle: 'Local mock content',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'iit' },
    links: [
      { _key: 'l2', _type: 'link', text: 'Read more', url: 'https://example.com' },
    ],
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 255, g: 0, b: 255 } }, // magenta
  } as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-3',
    title: 'Next is Now',
    shortTitle: 'Next is Now',
    subTitle: 'Local mock content',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'next-is-now' },
    links: [
      { _key: 'l3', _type: 'link', text: 'View', url: 'https://example.com' },
    ],
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 255, g: 255, b: 0 } }, // yellow
  } as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-4',
    title: 'Typeforce 12',
    shortTitle: 'Typeforce 12',
    subTitle: 'Local mock content',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'typeforce-12' },
    links: [
      { _key: 'l4', _type: 'link', text: 'Explore', url: 'https://example.com' },
    ],
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 0, g: 255, b: 0 } }, // green
  } as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-5',
    title: 'Typeforce 9',
    shortTitle: 'Typeforce 9',
    subTitle: 'Local mock content',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'typeforce-9' },
    links: [
      { _key: 'l5', _type: 'link', text: 'Check it out', url: 'https://example.com' },
    ],
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 255, g: 165, b: 0 } }, // orange
  } as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-6',
    title: 'UIUC Project',
    shortTitle: 'UIUC',
    subTitle: 'Local mock content',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'uiuc' },
    links: [
      { _key: 'l6', _type: 'link', text: 'Learn more', url: 'https://example.com' },
    ],
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 138, g: 43, b: 226 } }, // blue violet
  } as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-7',
    title: 'Creative Workspace',
    shortTitle: 'Workspace',
    subTitle: 'Local mock content',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'handshake' },
    links: [
      { _key: 'l7', _type: 'link', text: 'Discover', url: 'https://example.com' },
    ],
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 255, g: 20, b: 147 } }, // deep pink
  } as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-8',
    title: 'Digital Experience',
    shortTitle: 'Digital',
    subTitle: 'Local mock content',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'next-is-now' },
    links: [
      { _key: 'l8', _type: 'link', text: 'See more', url: 'https://example.com' },
    ],
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 0, g: 191, b: 255 } }, // deep sky blue
  } as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-9',
    title: 'Typography Showcase',
    shortTitle: 'Typography',
    subTitle: 'Local mock content',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'typeforce-9' },
    links: [
      { _key: 'l9', _type: 'link', text: 'Browse', url: 'https://example.com' },
    ],
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 50, g: 205, b: 50 } }, // lime green
  } as Project,
  {
    _type: 'project',
    // @ts-ignore mock id
    _id: 'mock-10',
    title: 'Design Innovation',
    shortTitle: 'Innovation',
    subTitle: 'Local mock content',
    // @ts-ignore mock slug
    slug: { _type: 'slug', current: 'iit' },
    links: [
      { _key: 'l10', _type: 'link', text: 'Explore', url: 'https://example.com' },
    ],
    // @ts-ignore mock color - Sanity color format with rgb
    color1: { rgb: { r: 255, g: 69, b: 0 } }, // red orange
  } as Project,
];
