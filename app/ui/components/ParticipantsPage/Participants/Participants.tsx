import { fetchCachedAllParticipants } from "@/app/lib/data";
import { ParticipantType } from "@/app/lib/definitions";
import Participant from "../Participant/Participant";
import styles from "./participants.module.css";

const Participants = async () => {
  const participants: ParticipantType[] = await fetchCachedAllParticipants();

  return (
    <div className={styles.wrapper}>
      {participants.map((participant) => (
        <Participant key={participant.id} {...participant} />
      ))}
    </div>
  );
};

export default Participants;
