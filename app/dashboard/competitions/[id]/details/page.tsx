import {
  fetchCachedEventById,
  fetchCachedParticipantsByEventId,
} from "@/app/lib/data";
import { ParticipantByEventIdRaw, EventTypeRaw } from "@/app/lib/definitions";
import { FC } from "react";
import styles from "./competitionsDetails.module.css";
import EventByIdInfo from "@/app/ui/components/CompetitionByIdDetailsPage/EventByIdInfo/EventByIdInfo";
import ParticipantsResultsEvent from "@/app/ui/components/CompetitionByIdDetailsPage/ParticipantsResultsEvent/ParticipantsResultsEvent";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page: FC<PageProps> = async ({ params }) => {
  const competitionId = (await params).id;
  const [participants, events]: [ParticipantByEventIdRaw[], EventTypeRaw[]] =
    await Promise.all([
      fetchCachedParticipantsByEventId(competitionId),
      fetchCachedEventById(competitionId),
    ]);
  const event = events[0];

  return (
    <div>
      <h1 className={styles.titleH1}>{event.event_name}</h1>
      <section className={styles.wrapper}>
        <EventByIdInfo event={event} />
      </section>

      <section className={styles.wrapper}>
        <ParticipantsResultsEvent participants={participants} />
      </section>
    </div>
  );
};

export default Page;
