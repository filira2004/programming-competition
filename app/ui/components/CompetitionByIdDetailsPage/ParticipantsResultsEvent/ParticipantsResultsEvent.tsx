import { ParticipantByEventIdRaw } from "@/app/lib/definitions";
import { FC } from "react";

interface ParticipantsResultsEventProps {
  participant: ParticipantByEventIdRaw;
}

const ParticipantsResultsEvent: FC<ParticipantsResultsEventProps> = ({
  participant,
}) => {
  return (
    <div>
      <h2>Результаты соревнований</h2>
      <p>{participant.coach_name}</p>
      <p>{participant.participant_name}</p>
    </div>
  );
};

export default ParticipantsResultsEvent;
