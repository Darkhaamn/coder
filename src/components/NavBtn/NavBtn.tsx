import cn from "classnames";

import { NavBtnProps } from "./NavBtn.props";
import CloseIcon from "./closeIcon.svg";
import styles from "./NavBtn.module.css";
import { ForwardedRef, forwardRef } from "react";

export const NavBtn = forwardRef(
  (
    { children, className, active, ...props }: NavBtnProps,
    ref: ForwardedRef<HTMLButtonElement>
  ): JSX.Element => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(className, styles.navBtn, styles[active])}
      >
        <div>{children}</div>

        <CloseIcon className={styles.closeIcon} />
      </button>
    );
  }
);
