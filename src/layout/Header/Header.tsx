import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import CloseIcon from "./closeIcon.svg";
import cn from "classnames";
import { Htag } from "../../components/Htag/Htag";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header {...props} className={cn(styles.header, className)}>
      {/* <ul className={styles.toolslist}>
        <li className={styles.toolsItem}>File</li>
        <li className={styles.toolsItem}>Edit</li>
        <li className={styles.toolsItem}>Selection</li>
        <li className={styles.toolsItem}>View</li>
        <li className={styles.toolsItem}>Go</li>
        <li className={styles.toolsItem}>Run</li>
        <li className={styles.toolsItem}>Terminal</li>
        <li className={styles.toolsItem}>Help</li>
      </ul> */}

      <Htag tag="h1" className={styles.myResume}>
        MY_RESUME
      </Htag>

      {/* <CloseIcon className={styles.closeIcon}></CloseIcon> */}
    </header>
  );
};
