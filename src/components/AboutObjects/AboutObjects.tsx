import cn from 'classnames';

import { AboutObjectsProps } from './AboutObjects.props';
import styles from './AboutObjects.module.css';
import { VarText } from '../VarText/VarText';
import { ObjectText } from '../ObjectText/ObjectText';

export const AboutObjects = ({ className, ...props }: AboutObjectsProps): JSX.Element => {
  return (
    <>
      <div {...props} className={cn(styles.variablesInner, className)}>
        <VarText varname={'aboutMe'} />
        <span className={styles.literall}>{'{'}</span>
      </div>

      <ul className={cn(styles.objecttextwrapper, styles.about)}>
        <li className={styles.objecttext}>
          <ObjectText
            objKey={`'Люблю учиться и люблю фронтенд'`}
            objValue={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
          ></ObjectText>
        </li>
        <li className={styles.objecttext}>
          <ObjectText
            objKey={`'Готов изучать новое'`}
            objValue={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
          ></ObjectText>
        </li>
        <li className={styles.objecttext}>
          <ObjectText
            objKey={`'Умею правильно распределять время'`}
            objValue={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
          ></ObjectText>
        </li>
        <li className={styles.objecttext}>
          <ObjectText
            objKey={`'Не люблю недоделанную работу'`}
            objValue={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
          ></ObjectText>
        </li>
        <li className={styles.objecttext}>
          <ObjectText
            objKey={`'Легко уживаюсь в любом коллективе'`}
            objValue={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
          ></ObjectText>
        </li>
        <li className={styles.objecttext}>
          <ObjectText
            objKey={`'Очень люблю обучать'`}
            objValue={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
          ></ObjectText>
        </li>
      </ul>
      <span className={styles.literall}>{'}'}</span>

      <div {...props} className={cn(styles.variablesInner, className)}>
        <VarText varname={'myCourses'} />
        <span className={styles.literall}>{'['}</span>
      </div>

      <ul className={styles.coursesWrapper}>
        <li className={styles.coursestext}>
          <a target={'_blank'} href="https://www.udemy.com/course/javascript_full/">
            'Полный курс по JavaScript + React - с нуля до результата',
          </a>
        </li>
        <li className={styles.coursestext}>
          <a target={'_blank'} href="https://www.udemy.com/course/react-from-scratch/">
            'React с нуля для начинающих',
          </a>
        </li>
        <li className={styles.coursestext}>
          <a target={'_blank'} href="https://www.udemy.com/course/react-nextjs/">
            'React + Next.js - с нуля. TypeScript, Hooks, SSR и CSS Grid',
          </a>
        </li>
        <li className={styles.coursestext}>
          <a target={'_blank'} href="https://www.udemy.com/course/redux-react/">
            'Redux для управления состоянием React-приложений'
          </a>
        </li>
      </ul>
      <span className={styles.literall}>{']'}</span>
    </>
  );
};
