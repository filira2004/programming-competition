import { fetchCachedAllEvents } from "@/app/lib/data";
import { EventTypeRaw } from "@/app/lib/definitions";
import styles from "./competitions.module.css";
import PastEvents from "@/app/ui/components/CompetitionsPage/PastEvents/PastEvents";
import UpcomingEvents from "@/app/ui/components/CompetitionsPage/UpcomingEvents/UpcomingEvents";

const Page = async () => {
  const {
    upcomingEvents,
    pastEvents,
  }: { upcomingEvents: EventTypeRaw[]; pastEvents: EventTypeRaw[] } =
    await fetchCachedAllEvents();

  return (
    <div>
      <h1 className={styles.titleH1}>Список соревнований</h1>

      <section className={styles.wrapper}>
        <UpcomingEvents upcomingEvents={upcomingEvents} />
      </section>
      <section className={styles.wrapper}>
        <PastEvents pastEvents={pastEvents} />
      </section>
    </div>
  );
};

export default Page;
