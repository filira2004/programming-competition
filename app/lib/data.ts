import postgres from "postgres";
import {
  CoachType,
  EventTypeRaw,
  ParticipantByEventIdRaw,
  ParticipantType,
} from "./definitions";
import { unstable_cache } from "next/cache";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function fetchAllParticipants() {
  try {
    const data = await sql<ParticipantType[]>`SELECT * FROM participants`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch participants data.");
  }
}

export const fetchCachedAllParticipants = unstable_cache(
  fetchAllParticipants,
  ["allParticipants"],
  { tags: ["allParticipants"] }
);

async function fetchAllCoaches() {
  try {
    const data = await sql<CoachType[]>`SELECT * FROM coaches`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch coaches data.");
  }
}

export const fetchCachedAllCoaches = unstable_cache(
  fetchAllCoaches,
  ["allCoaches"],
  { tags: ["allCoaches"] }
);

async function fetchAllEvents() {
  try {
    const currentDate = new Date().toISOString().split("T")[0];

    const upcomingEvents = await sql<EventTypeRaw[]>`
      SELECT
        events.id,
        events.name AS event_name,
        dates.date AS event_date,
        venues.name AS venue_name,
        venues.address AS venue_address,
        venues.capacity AS venue_capacity,
        organizers.name AS organizer_name,
        organizers.type AS organizer_type,
        organizers.contact_info AS organizer_contact_info
      FROM events
      JOIN dates ON events.date_id = dates.id
      JOIN venues ON events.venue_id = venues.id
      JOIN organizers ON events.organizer_id = organizers.id
      WHERE dates.date > ${currentDate}
      ORDER BY dates.date ASC;
    `;

    const pastEvents = await sql<EventTypeRaw[]>`
      SELECT
        events.id,
        events.name AS event_name,
        dates.date AS event_date,
        venues.name AS venue_name,
        venues.address AS venue_address,
        venues.capacity AS venue_capacity,
        organizers.name AS organizer_name,
        organizers.type AS organizer_type,
        organizers.contact_info AS organizer_contact_info
      FROM events
      JOIN dates ON events.date_id = dates.id
      JOIN venues ON events.venue_id = venues.id
      JOIN organizers ON events.organizer_id = organizers.id
      WHERE dates.date < ${currentDate}
      ORDER BY dates.date DESC;
    `;

    return {
      upcomingEvents,
      pastEvents,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch events.");
  }
}

export const fetchCachedAllEvents = unstable_cache(
  fetchAllEvents,
  ["allEvents"],
  { tags: ["allEvents"] }
);

async function fetchEventById(eventId: string) {
  try {
    const data = await sql<EventTypeRaw[]>`SELECT 
          e.id AS event_id,
          e.name AS event_name,

          d.date AS event_date,

          v.name AS venue_name,
          v.address AS venue_address,
          v.capacity AS venue_capacity,

          o.name AS organizer_name,
          o.type AS organizer_type,
          o.contact_info AS organizer_contact_info

      FROM events e
      LEFT JOIN dates d ON e.date_id = d.id
      LEFT JOIN venues v ON e.venue_id = v.id
      LEFT JOIN organizers o ON e.organizer_id = o.id

      WHERE e.id = ${eventId};`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch event by id data.");
  }
}

export const fetchCachedEventById = unstable_cache(
  fetchEventById,
  ["eventById"],
  { tags: ["eventById"] }
);

async function fetchParticipantsByEventId(eventId: string) {
  try {
    const data = await sql<ParticipantByEventIdRaw[]>`SELECT 
          p.id AS participant_id,
          p.full_name AS participant_name,
          p.university_name,
          p.course_number,
          p.group_number,

          c.full_name AS coach_name,

          pa.score AS participant_score

      FROM participations pa
      JOIN participants p ON pa.participant_id = p.id
      LEFT JOIN workout w ON pa.event_id = w.event_id AND p.id = w.participant_id
      LEFT JOIN coaches c ON w.coach_id = c.id

      WHERE pa.event_id = ${eventId};`;
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch participants by event id data.");
  }
}

export const fetchCachedParticipantsByEventId = unstable_cache(
  fetchParticipantsByEventId,
  ["participantsByEventId"],
  { tags: ["participantsByEventId"] }
);
