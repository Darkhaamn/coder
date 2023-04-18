import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import { Header } from "./Header/Header";
import { FunctionComponent, useRef } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import { Provider } from "react-redux";
import { store } from "../features/store";
import { Navigation } from "./Navigation/Navigation";
import { UpBtn } from "../components/Up/upBtn";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const navRef = useRef<HTMLElement>(null);

  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar}></Sidebar>
      <Navigation ref={navRef} className={styles.nav}></Navigation>

      <main className={styles.body}>{children}</main>
      <UpBtn scrollref={navRef}></UpBtn>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Provider store={store}>
        <Layout>
          <Component {...props} />
        </Layout>
      </Provider>
    );
  };
};
