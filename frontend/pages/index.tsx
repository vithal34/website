import type { InferGetStaticPropsType, NextPage } from 'next';
import { authorizedSanityExperimentalTypesafeClient } from '../src/sanity/sanityClient';
import { SceneName } from '../src/SceneController';
import { mockProjects } from '../src/mockProjects';

export async function getStaticProps() {
  const projects = await authorizedSanityExperimentalTypesafeClient.getAll('project');
  const projectsOrMock = (projects && projects.length > 0) ? projects : mockProjects;
  const scene:SceneName = 'intro';
  return {
    props: {
      projects: projectsOrMock,
      scene,
    },
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const ScenePage: NextPage<Props> = () => null;

export default ScenePage;
