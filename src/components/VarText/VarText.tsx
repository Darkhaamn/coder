import cn from "classnames";

import { VarTextProps } from "./VarText.props";
import styles from "./VarText.module.css";
import { Htag } from "../Htag/Htag";

export const VarText = ({
  varname,
  text,
  className,
  ...props
}: VarTextProps): JSX.Element => {
  
  return (
    <div {...props} className={cn(styles.textInner, className)}>
      <Htag className={styles.header} tag="h3">
        <span className={styles.variable}>let</span>
        <span className={styles.varname}>{varname}</span>
        <span className={styles.equals}>=</span>
        {text ? <span className={styles.text}>{text}</span> : null}
      </Htag>
    </div>
  );

};
