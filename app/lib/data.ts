import postgres from "postgres";
import { CoachType, EventTypeRaw, ParticipantType } from "./definitions";
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
