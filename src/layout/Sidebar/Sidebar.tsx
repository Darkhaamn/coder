import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import { Htag } from "../../components/Htag/Htag";
import { Skills } from "../../components/Skills/Skills";
import Image from "next/image";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props} className={cn(styles.sidebar, className)}>
      <div className={styles.avatarwrapper}>
        <div>
          <Image
            className={styles.avatar}
            src="/avatar.png"
            width={200}
            height={200}
            layout={"responsive"}
            priority={true}
            quality={100}
          ></Image>
        </div>
        <Htag tag="h3" className={styles.name}>
          Oblako.dev
        </Htag>
        <div className={styles.hello}>Hello world!✋</div>
        <div className={styles.frontend}>Frontend-developer</div>
      </div>

      <hr className={styles.line} />

      <Skills></Skills>
    </div>
  );
};
