import { upBtnProps } from "./upBtn.props";
import styles from "./upBtn.module.css";
import ArrowUp from "./ArrowUp.svg";
import cn from "classnames";

import { useEffect, useState } from "react";

export const UpBtn = ({ scrollref, ...props }: upBtnProps): JSX.Element => {
  const isBrowser = typeof window != "undefined";

  const [btnOpacity, setBtnOpacity] = useState<number>(1);

  const handleScroll = (): void => {
    if (
      isBrowser &&
      scrollref.current !== null &&
      scrollref.current.getBoundingClientRect().y < 1000
    ) {
      setBtnOpacity(
        (scrollref.current.getBoundingClientRect().y / (window.scrollY + 20)) *
          -2.3
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  return (
    <button
      onClick={(): void =>
        scrollref.current?.scrollIntoView({ behavior: "smooth" })
      }
      style={{
        opacity: btnOpacity,
        display:
          scrollref.current &&
          scrollref.current.getBoundingClientRect().y < 500 &&
          window.innerWidth < 590
            ? "flex"
            : "none",
      }}
      className={styles.btn}
      {...props}
    >
      <ArrowUp className={styles.arrowup}></ArrowUp>
    </button>
  );
};
