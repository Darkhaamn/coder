import cn from "classnames";

import { ProjectsObjectsProps } from "./ProjectsObjects.props";
import styles from "./ProjectsObjects.module.css";
import { VarText } from "../VarText/VarText";
import { ObjectText } from "../ObjectText/ObjectText";

export const ProjectsObjects = ({
  varName,
  stackDescr,
  stackTitle,
  projectTitle,
  projectDescription,
  ...props
}: ProjectsObjectsProps): JSX.Element => {
  return (
    <>
      <div {...props} className={cn(styles.variablesInner)}>
        <VarText varname={varName} />
        <span className={styles.literall}>{"{"}</span>
      </div>

      <ul className={styles.objecttextwrapper}>
        <li className={styles.objecttext}>
          <ObjectText
            objKey={projectTitle}
            objValue={projectDescription}
          ></ObjectText>
        </li>

        <li className={styles.objecttext}>
          <ObjectText objKey={stackTitle} objValue={stackDescr}></ObjectText>
        </li>
      </ul>
      <span className={styles.literall}>{"}"}</span>
    </>
  );
};
