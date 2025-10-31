// import fetch from 'node-fetch';
import { createClient as createExperimentalTypesafeClient } from 'sanity-codegen';
import createClient from '@sanity/client';
// eslint-disable-next-line import/no-relative-packages
import { Documents } from '../../generatedSanitySchemaTypes';

const clientConfig = {
  projectId: process.env.SANITY_PROJECT_ID ?? '',
  dataset: process.env.SANITY_DATASET ?? '',
  previewMode: false,
  useCdn: false,
  apiVersion: '2022-07-31',
};

const authorizedClientConfig = {
  ...clientConfig,
  token: process.env.SANITY_TOKEN ?? '',
};

const isSanityConfigured = Boolean(clientConfig.projectId && clientConfig.dataset && clientConfig.projectId !== 'dummy');

export const authorizedSanityClient: any = isSanityConfigured ? createClient(authorizedClientConfig) : {};
export const safeSanityClient: any = isSanityConfigured ? createClient(clientConfig) : {};

// @ts-ignore
// eslint-disable-next-line max-len
export const authorizedSanityExperimentalTypesafeClient: any = isSanityConfigured
  ? createExperimentalTypesafeClient<Documents>({
    ...authorizedClientConfig,
    // @ts-ignore
    fetch,
  })
  : {
    // Minimal fallback used in local dev without Sanity creds
    getAll: async () => [],
  };
