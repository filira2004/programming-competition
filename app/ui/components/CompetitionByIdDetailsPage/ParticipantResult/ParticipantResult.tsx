import { ParticipantByEventIdRaw } from "@/app/lib/definitions";
import { FC } from "react";
import styles from "./participantResult.module.css";

interface ParticipantResultProps {
  participant: ParticipantByEventIdRaw;
}

const ParticipantResult: FC<ParticipantResultProps> = ({ participant }) => {
  return (
    <article className={styles.wrapper}>
      <h3 className={styles.titleH3}>
        Участник: {participant.participant_name}
      </h3>
      <section className={styles.section}>
        <p className={styles.paragraph}>
          Набранные баллы: {participant.participant_score}
        </p>
        <p className={styles.paragraph}>Тренер: {participant.coach_name}</p>
        <p className={styles.paragraph}>
          Университет: {participant.university_name}
        </p>
        <p className={styles.paragraph}>
          Номер курса: {participant.course_number}
        </p>
        <p className={styles.paragraph}>
          Номер группы: {participant.group_number}
        </p>
      </section>
    </article>
  );
};

export default ParticipantResult;
