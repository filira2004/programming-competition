"use client";

import { AcademicCapIcon } from "@heroicons/react/24/outline";
import styles from "@/app/ui/components/PCLogo/pcLogo.module.css";

const PCLogo = () => {
  return (
    <div className={styles.container}>
      <AcademicCapIcon className={styles.svg} />
      <p className={styles.paragraph}>PC</p>
    </div>
  );
};

export default PCLogo;
