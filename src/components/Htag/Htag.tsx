import cn from "classnames";

import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

export const Htag = ({
  tag,
  children,
  className,
  ...props
}: HtagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1 {...props} className={cn(className, styles.h1)}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 {...props} className={cn(styles.h2, className)}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 {...props} className={cn(styles.h3, className)}>
          {children}
        </h3>
      );
    default:
      return <></>;
  }
};
