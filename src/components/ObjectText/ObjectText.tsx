import cn from "classnames";

import { ObjectTextProps } from "./ObjectText.props";
import styles from "./ObjectText.module.css";

export const ObjectText = ({
  children,
  objKey,
  objValue,
  className,
  ...props
}: ObjectTextProps): JSX.Element => {
  return (
    <div {...props} className={cn(styles.textInner, className)}>
      {objKey}
      <span className={styles.white}>:</span>
      {objValue}
      {children}
      <span className={styles.white}>,</span>
    </div>
  );
};
