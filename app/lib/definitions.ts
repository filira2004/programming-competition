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
  contactInfo: string;
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
  dateId: DateType["id"];
  venueId: VenueType["id"];
  organizerId: OrganizerType["id"];
};

export type TaskType = {
  id: string;
  name: string;
  text: string;
  maxScore: number;
};

export type EventTaskType = {
  id: string;
  eventId: EventType["id"];
  taskId: TaskType["id"];
};

export type ParticipantType = {
  id: string;
  login: string;
  fullName: string;
  universityName: string;
  courseNumber: 1 | 2 | 3 | 4 | 5;
  groupNumber: string;
};

export type ParticipationType = {
  id: string;
  score: number;
  eventId: EventType["id"];
  participantId: ParticipantType["id"];
};

export type CoachType = {
  id: string;
  login: string;
  fullName: string;
};

export type WorkoutType = {
  id: string;
  eventId: EventType["id"];
  participantId: ParticipantType["id"];
  coachId: CoachType["id"];
};
