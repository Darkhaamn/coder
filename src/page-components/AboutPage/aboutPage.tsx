import { AboutObjects } from '../../components/AboutObjects/AboutObjects';
import { VarText } from '../../components/VarText/VarText';
import { aboutPageProps } from './aboutPage.props';
import styles from './aboutPage.module.css';

export function AboutPage({ ...props }: aboutPageProps): JSX.Element {
  return (
    <div {...props}>
      <VarText varname={'myName'} text={`'Oblako.dev'`}></VarText>
      <VarText varname={'mySurname'} text={`'Oblako.dev'`}></VarText>
      <VarText varname={'university'} text={`'Oblako.dev'`}></VarText>
      <VarText
        varname={'myGitHub'}
        text={
          <a target={'_blank'} href="https://github.com/orgs/OblakoDev/repositories">
            <span className={styles.gitlink}>https://github.com/OblakoDev</span>
          </a>
        }
      ></VarText>
      <AboutObjects />
    </div>
  );
}
