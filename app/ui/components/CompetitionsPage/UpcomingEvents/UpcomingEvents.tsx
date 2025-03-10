import { FC } from "react";
import styles from "./upcommingEvents.module.css";
import { EventTypeRaw } from "@/app/lib/definitions";
import Event from "../Event/Event";

interface UpcomingEventsProps {
  upcomingEvents: EventTypeRaw[];
}

const UpcomingEvents: FC<UpcomingEventsProps> = ({ upcomingEvents }) => {
  return (
    <div>
      <h2 className={styles.titleH2}>Будующие соревнования</h2>
      {!upcomingEvents.length ? (
        <h3 className={styles.titleH3}>Будующие соревнования отсутствуют</h3>
      ) : (
        <div className={styles.wrapper}>
          {upcomingEvents.map((upcomingEvent) => (
            <Event
              key={upcomingEvent.id}
              event={upcomingEvent}
              ispastEvents={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
