// import bcrypt from "bcrypt";
// import postgres from "postgres";
// import {
//   users,
//   dates,
//   organizers,
//   venues,
//   events,
//   tasks,
//   eventTasks,
//   participants,
//   participations,
//   coaches,
//   workout,
// } from "../lib/placeholderData";

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// async function seedUsers() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(500) NOT NULL,
//       email VARCHAR(500) NOT NULL UNIQUE CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$'),
//       password VARCHAR(500) NOT NULL
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = bcrypt.hashSync(user.password, 10);
//       return sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedUsers;
// }

// async function seedDates() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS dates (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       date DATE NOT NULL
//     );
//   `;

//   const insertedDates = await Promise.all(
//     dates.map(async (date) => {
//       return sql`
//         INSERT INTO dates (id, date)
//         VALUES (${date.id}, ${date.date})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedDates;
// }

// async function seedOrganizers() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS organizers (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(500) NOT NULL,
//       type VARCHAR(500) NOT NULL CHECK (type ~* '^(Государственная|Частная|Корпоративная)$'),
//       contact_info VARCHAR(5000) NOT NULL
//     );
//   `;

//   const insertedOrganizers = await Promise.all(
//     organizers.map(async (organizer) => {
//       return sql`
//         INSERT INTO organizers (id, name, type, contact_info)
//         VALUES (${organizer.id}, ${organizer.name}, ${organizer.type}, ${organizer.contactInfo})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedOrganizers;
// }

// async function seedVenues() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS venues (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       address VARCHAR(1000) NOT NULL,
//       name VARCHAR(1000) NOT NULL,
//       capacity INT NOT NULL CHECK (capacity > 0)
//     );
//   `;

//   const insertedVenues = await Promise.all(
//     venues.map(async (venue) => {
//       return sql`
//         INSERT INTO venues (id, address, name, capacity)
//         VALUES (${venue.id}, ${venue.address}, ${venue.name}, ${venue.capacity})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedVenues;
// }

// async function seedEvents() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS events (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(1000) NOT NULL,
//       date_id UUID REFERENCES dates(id),
//       venue_id UUID REFERENCES venues(id),
//       organizer_id UUID REFERENCES organizers(id)
//     );
//   `;

//   const insertedEvents = await Promise.all(
//     events.map(async (event) => {
//       return sql`
//         INSERT INTO events (id, name, date_id, venue_id, organizer_id)
//         VALUES (${event.id}, ${event.name}, ${event.dateId}, ${event.venueId}, ${event.organizerId})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedEvents;
// }

// async function seedTasks() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS tasks (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(1000) NOT NULL,
//       text TEXT NOT NULL,
//       max_score INT NOT NULL CHECK (max_score BETWEEN 0 AND 100)
//     );
//   `;

//   const insertedTasks = await Promise.all(
//     tasks.map(async (task) => {
//       return sql`
//         INSERT INTO tasks (id, name, text, max_score)
//         VALUES (${task.id}, ${task.name}, ${task.text}, ${task.maxScore})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedTasks;
// }

// async function seedEventTasks() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS event_tasks (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       event_id UUID REFERENCES events(id),
//       task_id UUID REFERENCES tasks(id)
//     );
//   `;

//   const insertedEventTasks = await Promise.all(
//     eventTasks.map(async (eventTask) => {
//       return sql`
//         INSERT INTO event_tasks (id, event_id, task_id)
//         VALUES (${eventTask.id}, ${eventTask.eventId}, ${eventTask.taskId})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedEventTasks;
// }

// async function seedParticipants() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS participants (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       login VARCHAR(500) NOT NULL,
//       full_name VARCHAR(500) NOT NULL,
//       university_name VARCHAR(1000) NOT NULL,
//       course_number INT NOT NULL CHECK (course_number BETWEEN 1 AND 5),
//       group_number VARCHAR(100) NOT NULL
//     );
//   `;

//   const insertedParticipants = await Promise.all(
//     participants.map(async (participant) => {
//       return sql`
//         INSERT INTO participants (id, login, full_name, university_name, course_number, group_number)
//         VALUES (${participant.id}, ${participant.login}, ${participant.fullName}, ${participant.universityName}, ${participant.courseNumber}, ${participant.groupNumber})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedParticipants;
// }

// async function seedParticipations() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS participations (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       score INT NOT NULL CHECK (score > 0),
//       event_id UUID REFERENCES events(id),
//       participant_id UUID REFERENCES participants(id)
//     );
//   `;

//   const insertedParticipations = await Promise.all(
//     participations.map(async (participation) => {
//       return sql`
//         INSERT INTO participations (id, score, event_id, participant_id)
//         VALUES (${participation.id}, ${participation.score}, ${participation.eventId}, ${participation.participantId})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedParticipations;
// }

// async function seedCoaches() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS coaches (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       login VARCHAR(500) NOT NULL,
//       full_name VARCHAR(500) NOT NULL
//     );
//   `;

//   const insertedCoaches = await Promise.all(
//     coaches.map(async (coache) => {
//       return sql`
//         INSERT INTO coaches (id, login, full_name)
//         VALUES (${coache.id}, ${coache.login}, ${coache.fullName})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedCoaches;
// }

// async function seedWorkout() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS workout (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       event_id UUID REFERENCES events(id),
//       participant_id UUID REFERENCES participants(id),
//       coach_id UUID REFERENCES coaches(id)
//     );
//   `;

//   const insertedWorkout = await Promise.all(
//     workout.map(async (wrkt) => {
//       return sql`
//         INSERT INTO workout (id, event_id, participant_id, coach_id)
//         VALUES (${wrkt.id}, ${wrkt.eventId}, ${wrkt.participantId}, ${wrkt.coachId})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedWorkout;
// }

// export async function GET() {
//   //СРАБОТЛА ТОЛЬКО ПО ОДНОМУ ЗАПРОСУ ВЫПОЛНЯТЬ
//   try {
//     const result = await sql.begin((sql) => [
//       seedUsers(),
//       seedDates(),
//       seedOrganizers(),
//       seedVenues(),
//       seedEvents(),
//       seedTasks(),
//       seedEventTasks(),
//       seedParticipants(),
//       seedParticipations(),
//       seedCoaches(),
//       seedWorkout(),
//     ]);

//     return Response.json({ message: "Database seeded successfully" });
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
