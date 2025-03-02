import Image, { StaticImageData } from "next/image";
import styles from "./sectionImage.module.css";
import { FC } from "react";

interface SectionImageProps {
  imageDesktop: StaticImageData;
  imageMobile: StaticImageData;
  widthID: number;
  heightID: number;
  widthIM: number;
  heightIM: number;
  isPriority: boolean;
}

const SectionImage: FC<SectionImageProps> = ({
  imageDesktop,
  imageMobile,
  widthID,
  heightID,
  widthIM,
  heightIM,
  isPriority,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageDesktop}
            width={widthID}
            height={heightID}
            priority={isPriority}
            className={styles.heroImageDesktop}
            alt="Скриншот проекта Programming competition, показывающий версию для настольных компьютеров"
          />
          <Image
            src={imageMobile}
            width={widthIM}
            height={heightIM}
            priority={isPriority}
            className={styles.heroImageMobile}
            alt="Скриншот проекта Programming competition, показывающие версию для мобильных устройств"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionImage;
