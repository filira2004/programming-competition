import classNames from "classnames";
import styles from "./page.module.css";
import Link from "next/link";
import imageSrc from "../public/programming-competition-image.png";
import heroImageDesktop from "../public/hero-image-desktop.png";
import heroImageMobile from "../public/hero-image-mobile.png";
import Image from "next/image";
import SectionImage from "./ui/components/SectionImage.tsx/SectionImage";

export default function Home() {
  return (
    <section className={styles.mainSection}>
      <header className={styles.mainSectionHeader}>
        <h1 className={styles.titleH1}>
          Участвуйте в межвузовских олимпиадах.
        </h1>
        <h2 className={styles.titleH2}>
          Programming competition - узнавайте о предстоящих соревнованиях,
          следите за прошедшими и изучайте результаты прошлых турниров
        </h2>
        <nav className={styles.navBar}>
          {/* TODO Доделать линк для соревнованяй */}
          <Link
            href="/"
            className={classNames(styles.navLink, styles.loginLink)}
          >
            <p className={styles.baseText}>Олимпиады</p>
          </Link>
          <Link
            href="/login"
            className={classNames(styles.navLink, styles.competitionLink)}
          >
            <p className={styles.baseText}>Войти</p>
          </Link>
        </nav>
      </header>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          width={1024}
          height={1024}
          className={styles.images}
          priority
          alt="Иллюстрация пользователей Programming competition, символизирующая обучение и веселье"
        />
      </div>
      <div className={styles.sectionImageWrapper}>
        <SectionImage
          imageDesktop={heroImageDesktop}
          imageMobile={heroImageMobile}
          widthID={1920}
          heightID={1080}
          widthIM={776}
          heightIM={830}
          isPriority={true}
        />
      </div>
    </section>
  );
}
