import { EventTypeRaw } from "@/app/lib/definitions";
import { FC } from "react";
import styles from "./eventByIdInfo.module.css";

interface EventByIdInfoProps {
  event: EventTypeRaw;
}

const EventByIdInfo: FC<EventByIdInfoProps> = ({ event }) => {
  return (
    <article className={styles.wrapper}>
      <section className={styles.section}>
        <div className={styles.venue}>
          <p className={styles.paragraph}>
            Место проведения: {event.venue_name}
          </p>
          <p className={styles.paragraph}>Адрес: {event.venue_address}</p>
          <p className={styles.paragraph}>
            Вместимость: {event.venue_capacity} человек
          </p>
        </div>
        <div className={styles.organizer}>
          <p className={styles.paragraph}>
            Название организации: {event.organizer_name}
          </p>
          <p className={styles.paragraph}>
            Тип организации: {event.organizer_type}
          </p>
          <p className={styles.paragraph}>
            Контактная информация: {event.organizer_contact_info}
          </p>
        </div>
      </section>
      <p className={styles.date}>
        Дата проведения:{" "}
        {new Date(event.event_date).toLocaleDateString("ru-RU")}
      </p>
    </article>
  );
};

export default EventByIdInfo;
