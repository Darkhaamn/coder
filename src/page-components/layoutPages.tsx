import styles from "./layoutPages.module.css";

import { FunctionComponent } from "react";

export function LayoutPages({ children, ...props }): JSX.Element {
  return (
    <div {...props} className={styles.codetextWrapper}>
      {children}
    </div>
  );
}

export const layoutForPagesContent = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <LayoutPages>
        <Component {...props} />
      </LayoutPages>
    );
  };
};
