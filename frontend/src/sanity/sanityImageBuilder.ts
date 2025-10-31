import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { safeSanityClient } from './sanityClient';

// Get a pre-configured url-builder from your sanity sanityClient
const isConfigured = Boolean(process.env.SANITY_PROJECT_ID && process.env.SANITY_DATASET && process.env.SANITY_PROJECT_ID !== 'dummy');
const builder = isConfigured ? imageUrlBuilder(safeSanityClient) : null as unknown as ReturnType<typeof imageUrlBuilder>;

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function getSanityImageUrlFor(source:SanityImageSource) {
  if (builder) return builder.image(source);
  // Fallback chainable stub: .width().url()
  return {
    width: () => ({ url: () => '' }),
    url: () => '',
  } as any;
}

// function urlFor(source) {
//   return builder.image(source)
// }
