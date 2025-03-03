import Image from "next/image";
import SectionImage from "../SectionImage.tsx/SectionImage";
import SectionOpenHeader from "../SectionOpenHeader/SectionOpenHeader";
import styles from "./sectionOpen.module.css";
import imageSrc from "./../../../../public/programming-competition-image.png";
import heroImageDesktop from "./../../../../public/hero-image-desktop.png";
import heroImageMobile from "./../../../../public/hero-image-mobile.png";

const SectionOpen = () => {
  return (
    <section className={styles.mainSection}>
      <SectionOpenHeader />
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          width={1024}
          height={1024}
          className={styles.image}
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
};

export default SectionOpen;
