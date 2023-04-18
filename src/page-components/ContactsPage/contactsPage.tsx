import { VarText } from '../../components/VarText/VarText';
import styles from './contactsPage.module.css';
import { ContactsPageProps } from './contactsPage.props';

export function ContactsPage({ ...props }: ContactsPageProps): JSX.Element {
  return (
    <div className={styles.contactswrapper} {...props}>
      <VarText
        text={
          <a className={styles.link} target={'_blank'} href="https://www.linkedin.com">
            LinkedIn
          </a>
        }
        varname="myLinkedIn"
      />

      <VarText
        text={
          <a className={styles.link} target={'_blank'} href="mailto:example@oblako.dev">
            example@oblako.dev
          </a>
        }
        varname="myMail"
      />

      <VarText
        text={
          <a className={styles.link} target={'_blank'} href="tel:-">
            -
          </a>
        }
        varname="myPhone"
      />
      <VarText
        text={
          <a className={styles.link} target={'_blank'} href="https://t.me/bit_Makar">
            @bit_Makar
          </a>
        }
        varname="myTelegram"
      />
      <VarText
        text={
          <a className={styles.link} target={'_blank'} href="https://join.skype.com/invite/m6dJ1xdOw3AW">
            link
          </a>
        }
        varname="mySkype"
      />
    </div>
  );
}
