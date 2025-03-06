import { FC } from "react";
import styles from "./pastEvents.module.css";
import { EventTypeRaw } from "@/app/lib/definitions";
import Event from "../Event/Event";

interface PastEventsProps {
  pastEvents: EventTypeRaw[];
}

const PastEvents: FC<PastEventsProps> = ({ pastEvents }) => {
  return (
    <div>
      <h2 className={styles.titleH2}>Прошедшие соревнования</h2>
      {!pastEvents.length ? (
        <h3 className={styles.titleH3}>Прошедшие соревнования отсутствуют</h3>
      ) : (
        <div className={styles.wrapper}>
          {pastEvents.map((pastEvent) => (
            <Event key={pastEvent.id} event={pastEvent} ispastEvents={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PastEvents;
