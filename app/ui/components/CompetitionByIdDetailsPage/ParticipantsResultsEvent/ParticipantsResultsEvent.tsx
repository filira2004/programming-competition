import { ParticipantByEventIdRaw } from "@/app/lib/definitions";
import { FC } from "react";
import styles from "./participantsResultsEvent.module.css";
import ParticipantResult from "../ParticipantResult/ParticipantResult";

interface ParticipantsResultsEventProps {
  participants: ParticipantByEventIdRaw[];
}

const ParticipantsResultsEvent: FC<ParticipantsResultsEventProps> = ({
  participants,
}) => {
  return (
    <div>
      <h2 className={styles.titleH2}>Результаты соревнований</h2>
      <div className={styles.wrapper}>
        {participants.map((participant) => (
          <ParticipantResult
            key={participant.participant_id}
            participant={participant}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticipantsResultsEvent;
