import { FC } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { CoachType } from "@/app/lib/definitions";
import styles from "./coach.module.css";

const Coach: FC<CoachType> = ({ login, full_name }) => {
  return (
    <article className={styles.wrapper}>
      <h2 className={styles.titleH2}>{full_name}</h2>
      <UserIcon className={styles.userIcon} />
      <section className={styles.section}>
        <p className={styles.paragraph}>Логин: {login}</p>
      </section>
    </article>
  );
};

export default Coach;
