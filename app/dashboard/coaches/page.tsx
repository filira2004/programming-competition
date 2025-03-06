import Coaches from "@/app/ui/components/CoachesPage/Coaches/Coaches";
import styles from "./coachesPage.module.css";

const Page = () => {
  return (
    <div>
      <h1 className={styles.titleH1}>Список тренеров</h1>

      <div className={styles.wrapper}>
        <Coaches />
      </div>
    </div>
  );
};

export default Page;
