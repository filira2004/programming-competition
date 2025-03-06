import { ParticipantType } from "@/app/lib/definitions";
import { FC } from "react";
import styles from "./participant.module.css";
import { UserIcon } from "@heroicons/react/24/outline";

const Participant: FC<ParticipantType> = ({
  login,
  full_name,
  university_name,
  course_number,
  group_number,
}) => {
  return (
    <article className={styles.wrapper}>
      <h2 className={styles.titleH2}>{full_name}</h2>
      <UserIcon className={styles.userIcon} />
      <section className={styles.section}>
        <p className={styles.paragraph}>Логин: {login}</p>
        <p className={styles.paragraph}>
          Название университета: {university_name}
        </p>
        <p className={styles.paragraph}>Номер курса: {course_number}</p>
        <p className={styles.paragraph}>Номер группы: {group_number}</p>
      </section>
    </article>
  );
};

export default Participant;
