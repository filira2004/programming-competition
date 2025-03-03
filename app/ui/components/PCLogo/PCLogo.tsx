import styles from "./pcLogo.module.css";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const PCLogo = () => {
  return (
    <div className={styles.container}>
      <AcademicCapIcon className={styles.svg} />
      <p className={styles.paragraph}>PC</p>
    </div>
  );
};

export default PCLogo;
