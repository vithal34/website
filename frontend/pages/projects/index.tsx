// import React from 'react';
import type { InferGetStaticPropsType, NextPage } from 'next';
import { SceneName } from '../../src/SceneController';
import { authorizedSanityExperimentalTypesafeClient } from '../../src/sanity/sanityClient';
import { mockProjects } from '../../src/mockProjects';

export async function getStaticProps() {
  const projects = await authorizedSanityExperimentalTypesafeClient.getAll('project');
  const projectsOrMock = (projects && projects.length > 0) ? projects : mockProjects;
  const scene:SceneName = 'projects';

  return {
    props: {
      projects: projectsOrMock,
      scene,
    },
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = () => (null);

export default Home;
