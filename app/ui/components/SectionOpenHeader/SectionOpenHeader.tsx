import classNames from "classnames";
import Link from "next/link";
import styles from "./sectionOpenHeader.module.css";

const SectionOpenHeader = () => {
  return (
    <header className={styles.mainSectionHeader}>
      <h1 className={styles.titleH1}>Участвуйте в межвузовских олимпиадах.</h1>
      <h2 className={styles.titleH2}>
        Programming competition - узнавайте о предстоящих соревнованиях, следите
        за прошедшими и изучайте результаты прошлых турниров
      </h2>
      <nav className={styles.navBar}>
        <Link
          href="/dashboard/competitions"
          className={classNames(styles.navLink, styles.loginLink)}
        >
          <p className={styles.baseText}>Соревнования</p>
        </Link>
        <Link
          href="/login"
          className={classNames(styles.navLink, styles.competitionLink)}
        >
          <p className={styles.baseText}>Войти</p>
        </Link>
      </nav>
    </header>
  );
};

export default SectionOpenHeader;
