import { VarText } from '../../components/VarText/VarText';
import styles from './projectPage.module.css';
import { ProjectPageProps } from './projectPage.props';

import { ProjectsObjects } from '../../components/ProjectsObjects/ProjectsObjects';

export function ProjectPage({ ...props }: ProjectPageProps): JSX.Element {
  return (
    <div {...props}>
      <VarText text={`'Oblako.dev'`} varname="projectName"></VarText>
      <VarText
        varname={'projectLink'}
        text={
          <a className={styles.link} target={'_blank'} href="https://oblako.dev">
            link
          </a>
        }
      ></VarText>

      <ProjectsObjects
        varName={'aboutProject'}
        projectTitle={`'Oblaka.dev'`}
        projectDescription={`'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'`}
        stackTitle={`'Lorem Ipsum'`}
        stackDescr={`'Next.js + Typescript'`}
      ></ProjectsObjects>

      <VarText text={`'Oblako.dev'`} varname="projectName"></VarText>
      <VarText
        varname={'projectLink'}
        text={
          <a className={styles.link} target={'_blank'} href="https://oblako.dev">
            link
          </a>
        }
      ></VarText>

      <ProjectsObjects
        varName={'aboutProject'}
        projectTitle={`'Oblaka.dev'`}
        projectDescription={`'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'`}
        stackTitle={`'Lorem Ipsum'`}
        stackDescr={`'Next.js + Typescript'`}
      ></ProjectsObjects>

      <VarText text={`'Oblako.dev'`} varname="projectName"></VarText>
      <VarText
        varname={'projectLink'}
        text={
          <a className={styles.link} target={'_blank'} href="https://oblako.dev">
            link
          </a>
        }
      ></VarText>

      <ProjectsObjects
        varName={'aboutProject'}
        projectTitle={`'Oblaka.dev'`}
        projectDescription={`'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'`}
        stackTitle={`'Lorem Ipsum'`}
        stackDescr={`'Next.js + Typescript'`}
      ></ProjectsObjects>
    </div>
  );
}
