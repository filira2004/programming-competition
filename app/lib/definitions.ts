export type LinkType = {
  name: string;
  href: string;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type DateType = {
  id: string;
  date: string;
};

export type OrganizerType = {
  id: string;
  name: string;
  type: "Государственная" | "Частная" | "Корпоративная";
  contact_info: string;
};

export type VenueType = {
  id: string;
  address: string;
  name: string;
  capacity: number;
};

export type EventType = {
  id: string;
  name: string;
  date_id: DateType["id"];
  venue_id: VenueType["id"];
  organizer_id: OrganizerType["id"];
};

export type TaskType = {
  id: string;
  name: string;
  text: string;
  max_score: number;
};

export type EventTaskType = {
  id: string;
  event_id: EventType["id"];
  task_id: TaskType["id"];
};

export type ParticipantType = {
  id: string;
  login: string;
  full_name: string;
  university_name: string;
  course_number: 1 | 2 | 3 | 4 | 5;
  group_number: string;
};

export type ParticipationType = {
  id: string;
  score: number;
  event_id: EventType["id"];
  participant_id: ParticipantType["id"];
};

export type CoachType = {
  id: string;
  login: string;
  full_name: string;
};

export type WorkoutType = {
  id: string;
  event_id: EventType["id"];
  participant_id: ParticipantType["id"];
  coach_id: CoachType["id"];
};

export type EventTypeRaw = {
  id: EventType["id"];
  event_name: EventType["name"];
  event_date: DateType["date"];
  venue_name: VenueType["name"];
  venue_address: VenueType["address"];
  venue_capacity: VenueType["capacity"];
  organizer_name: OrganizerType["name"];
  organizer_type: OrganizerType["type"];
  organizer_contact_info: OrganizerType["contact_info"];
};

export type ParticipantByEventIdRaw = {
  participant_id: ParticipantType["id"];
  participant_name: ParticipantType["full_name"];
  university_name: ParticipantType["university_name"];
  course_number: ParticipantType["course_number"];
  group_number: ParticipantType["group_number"];
  coach_name: CoachType["full_name"];
  participant_score: ParticipationType["score"];
};
