import { NavigationProps } from "./NavigationProps.props";
import { NavBtn } from "../../components/NavBtn/NavBtn";
import styles from "./Navigation.module.css";
import { btnText } from "../../helpers/textBtn";
import Link from "next/link";
import { useRouter } from "next/router";
import { ForwardedRef, forwardRef } from "react";

export const Navigation = forwardRef(
  (
    { ...props }: NavigationProps,
    ref: ForwardedRef<HTMLElement>
  ): JSX.Element => {
    const router = useRouter();

    return (
      <nav ref={ref} {...props} className={styles.nav}>
        {btnText.map((item) => (
          <Link scroll={false} key={item.text} href={item.link}>
            <NavBtn
              active={item.link === router.pathname ? "active" : "notactive"}
            >
              {item.text}
            </NavBtn>
          </Link>
        ))}
      </nav>
    );
  }
);
