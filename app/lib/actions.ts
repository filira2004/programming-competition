"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function createCompetition(formData: FormData) {
  const rawFormData = {
    eventName: formData.get("eventName"),
    date: formData.get("date"),
    organizerName: formData.get("organizerName"),
    organizerType: formData.get("organizerType"),
    organizerContactInfo: formData.get("organizerContactInfo"),
    venueAddress: formData.get("venueAddress"),
    venueName: formData.get("venueName"),
    venueCapacity: formData.get("venueCapacity"),
  };
  const venueCapacityNumber = Number(rawFormData.venueCapacity);

  try {
    const [dateId] = await sql`
    INSERT INTO dates (date)
    VALUES (${String(rawFormData.date)})
    RETURNING id;
    `;

    const [organizerId] = await sql`
    INSERT INTO organizers (name, type, contact_info)
    VALUES (${String(rawFormData.organizerName)}, ${String(
      rawFormData.organizerType
    )}, ${String(rawFormData.organizerContactInfo)})
    RETURNING id;
    `;

    const [venueId] = await sql`
    INSERT INTO venues (address, name, capacity)
    VALUES (${String(rawFormData.venueAddress)}, ${String(
      rawFormData.venueName
    )}, ${venueCapacityNumber})
    RETURNING id; 
    `;

    const [eventId] = await sql`
    INSERT INTO events (name, date_id, venue_id, organizer_id)
    VALUES (${String(rawFormData.eventName)}, ${dateId.id}, ${venueId.id}, ${
      organizerId.id
    })
    RETURNING id;
    `;
    console.log(eventId);
  } catch (error) {
    console.error("Error inster event:", error);
  }

  revalidateTag("allEvents");
  redirect("/dashboard/competitions");
}
