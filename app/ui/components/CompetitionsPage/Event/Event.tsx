import { EventTypeRaw } from "@/app/lib/definitions";
import { FC } from "react";
import styles from "./event.module.css";
import { TrophyIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface EventProps {
  event: EventTypeRaw;
  ispastEvents: boolean;
}

const Event: FC<EventProps> = ({ event, ispastEvents }) => {
  return (
    <article className={styles.wrapper}>
      <h3 className={styles.titleH3}>{event.event_name}</h3>
      <TrophyIcon className={styles.userIcon} />
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
      {ispastEvents && (
        <Link
          href={`/dashboard/competitions/${event.id}/details`}
          className={styles.details}
        >
          Подробнее
        </Link>
      )}
    </article>
  );
};

export default Event;
