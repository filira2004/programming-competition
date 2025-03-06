import {
  CoachType,
  DateType,
  EventTaskType,
  EventType,
  OrganizerType,
  ParticipantType,
  ParticipationType,
  TaskType,
  UserType,
  VenueType,
  WorkoutType,
} from "./definitions";

export const users: UserType[] = [
  {
    id: "fdfb8821-72fa-4db7-84a4-d53cf0040ca3",
    name: "John",
    email: "john27@gmail.com",
    password: "123456",
  },
];

export const dates: DateType[] = [
  {
    id: "3cb2b013-0ae9-43b2-969d-b426914eaf58",
    date: "2025-02-10",
  },
];

export const organizers: OrganizerType[] = [
  {
    id: "d3c4cee5-c2f8-4e50-a0c3-c994c5971ac9",
    name: "Вперед",
    type: "Государственная",
    contact_info: "Телефон: 	8 (495) 12-34-567, e-mail: vpered@example.com",
  },
  {
    id: "be8c8d34-086f-4c57-88f1-b32b816b7340",
    name: "Новый Век",
    type: "Частная",
    contact_info: "Телефон: 8 (812) 98-76-543, e-mail: newcentury@example.com",
  },
  {
    id: "6fbded1f-e56b-45ae-b2e2-535456557eb3",
    name: "ТехноБудущее",
    type: "Корпоративная",
    contact_info:
      "Телефон: 8 (495) 55-66-777, e-mail: technofuture@example.com",
  },
  {
    id: "3cb9d449-6b55-4422-b13b-5872ee8ded69",
    name: "Наука и Прогресс",
    type: "Государственная",
    contact_info:
      "Телефон: 8 (800) 11-22-333, e-mail: scienceprogress@example.com",
  },
];

export const venues: VenueType[] = [
  {
    id: "37734e6a-6500-4801-aa9f-cbbfa6bf4402",
    address: "Старокачаловская ул., 1АБ, Москва",
    name: "Кинотеатр Каро",
    capacity: 1000,
  },
  {
    id: "88c9c39b-b63a-4e71-89bb-6f54092b3dcd",
    address: "Ленинградский просп., 36, Москва",
    name: "Концертный зал Крокус",
    capacity: 5000,
  },
  {
    id: "43f19e35-aafa-46a4-aba6-c44e23dd44b3",
    address: "Невский просп., 25, Санкт-Петербург",
    name: "Большой театр кукол",
    capacity: 600,
  },
  {
    id: "2e1f8fbf-fb7a-476e-84ed-37d38a8ea4e4",
    address: "Проспект Вернадского, 78, Москва",
    name: "Центр инноваций Сколково",
    capacity: 1200,
  },
  {
    id: "3a6bd470-e542-4d82-b961-64952bc74c40",
    address: "Казанская ул., 7, Казань",
    name: "Конгресс-холл Казань Экспо",
    capacity: 3000,
  },
];

export const events: EventType[] = [
  {
    id: "7acd634d-1dfd-4ae0-9205-f22240116394",
    name: "Хокатен",
    date_id: dates[0].id,
    venue_id: venues[0].id,
    organizer_id: organizers[0].id,
  },
];

export const tasks: TaskType[] = [
  {
    id: "6af62099-5866-4c47-9db4-18051d03ac1a",
    name: "Подсчитайте количество последовательных строк",
    text: "Вам дана строка allowed, состоящая из отдельных символов, и массив строк words. Строка является согласованной, если все символы в строке появляются в string allowed. Верните количество согласованных строк в массиве words.",
    max_score: 100,
  },
  {
    id: "7b5c2a66-d3f7-4b72-8b10-2a476f89c1d2",
    name: "Максимальная глубина бинарного дерева",
    text: "Дано бинарное дерево, найдите его максимальную глубину. Глубина бинарного дерева — это количество узлов на самом длинном пути от корня до самого дальнего листа.",
    max_score: 100,
  },
  {
    id: "9c1d5e77-f5b3-4a2d-92a0-4b77e6d8e2c3",
    name: "Проверка на палиндром",
    text: "Дана строка s. Определите, является ли она палиндромом, учитывая только буквенно-цифровые символы и игнорируя регистр.",
    max_score: 100,
  },
  {
    id: "3d7f8e99-4b21-4d3a-83c4-5e68f91a3b2d",
    name: "Сумма двух чисел",
    text: "Дан массив чисел nums и целевое значение target. Найдите два различных индекса i и j, таких что nums[i] + nums[j] = target.",
    max_score: 100,
  },
  {
    id: "2e6f7a88-59d4-4f73-92b1-6c89d3e7b4c5",
    name: "Объединение двух отсортированных списков",
    text: "Даны два отсортированных связанных списка. Объедините их в один отсортированный связанный список и верните его.",
    max_score: 100,
  },
  {
    id: "5f9a3c44-1d2e-4b75-9f6b-7a34e8c2d3b6",
    name: "Удаление дубликатов из отсортированного массива",
    text: "Дан отсортированный массив nums. Удалите дубликаты на месте так, чтобы каждый элемент встречался не более одного раза.",
    max_score: 100,
  },
  {
    id: "4c8d2f99-3a76-4d2b-94b2-8b67e9d1c3a4",
    name: "Перевернуть строку",
    text: "Напишите функцию, которая переворачивает строку. Ваша реализация должна изменять переданный массив символов inplace.",
    max_score: 100,
  },
  {
    id: "1a6e3d78-59c2-4b63-93a5-9c72e8d4f5b7",
    name: "Факториал числа",
    text: "Напишите функцию, которая принимает целое число n и возвращает его факториал.",
    max_score: 100,
  },
  {
    id: "8b2c3d77-1a56-4f72-91b3-0c86d9e2f7a8",
    name: "Поиск наибольшего общего делителя",
    text: "Реализуйте функцию, которая принимает два целых числа и возвращает их наибольший общий делитель.",
    max_score: 100,
  },
  {
    id: "9e1f2c88-4d5a-4b37-92c4-1a79d0e3f6b9",
    name: "Числа Фибоначчи",
    text: "Реализуйте функцию, которая возвращает n-е число Фибоначчи, используя как итеративный, так и рекурсивный методы.",
    max_score: 100,
  },
];

export const eventTasks: EventTaskType[] = [
  {
    id: "35310301-648c-4c89-86b0-6521128f5a53",
    event_id: events[0].id,
    task_id: tasks[0].id,
  },
  {
    id: "dc97487a-09ea-46a6-98f9-8ba66e8bf835",
    event_id: events[0].id,
    task_id: tasks[1].id,
  },
  {
    id: "6baeee77-631a-4d3d-80f5-97fb2bf449aa",
    event_id: events[0].id,
    task_id: tasks[2].id,
  },
  {
    id: "d22d3f5e-0fbd-4065-aae5-2261e9bff510",
    event_id: events[0].id,
    task_id: tasks[3].id,
  },
  {
    id: "7afee227-3474-4ec7-97d2-6ca272e39fa9",
    event_id: events[0].id,
    task_id: tasks[4].id,
  },
];

export const participants: ParticipantType[] = [
  {
    id: "57350f83-b748-458e-9eb7-0bb2faf69592",
    login: "Max293",
    full_name: "Максимов Максим Максимович",
    university_name: "Воронежский государственный педагогический университет",
    course_number: 3,
    group_number: "Б22-722-1",
  },
  {
    id: "ed72d518-1679-480f-8fe4-b1c6b53f92cf",
    login: "AnnaStar",
    full_name: "Старкова Анна Петровна",
    university_name: "Московский государственный университет",
    course_number: 2,
    group_number: "М21-534-2",
  },
  {
    id: "12c463e6-a59e-4978-bec2-a79da4e90ac4",
    login: "Dmitry99",
    full_name: "Смирнов Дмитрий Алексеевич",
    university_name: "Санкт-Петербургский политехнический университет",
    course_number: 4,
    group_number: "СП19-401-3",
  },
  {
    id: "5ecdfcf8-3aa1-4b74-870b-893b7e8453fd",
    login: "ElenaPro",
    full_name: "Кузнецова Елена Викторовна",
    university_name: "Новосибирский государственный университет",
    course_number: 1,
    group_number: "НГУ-101-1",
  },
];

export const participations: ParticipationType[] = [
  {
    id: "528e3398-a7be-4443-863f-6a45243a22bf",
    score: 200,
    event_id: events[0].id,
    participant_id: participants[0].id,
  },
  {
    id: "019695ce-41e6-4f0b-93e3-e82338c0557e",
    score: 250,
    event_id: events[0].id,
    participant_id: participants[1].id,
  },
  {
    id: "f8d0992c-706c-4458-b040-2ba25dbe2f15",
    score: 150,
    event_id: events[0].id,
    participant_id: participants[2].id,
  },
  {
    id: "ed63c3b6-5661-4fa8-9026-0b40fe16ef0c",
    score: 300,
    event_id: events[0].id,
    participant_id: participants[3].id,
  },
];

export const coaches: CoachType[] = [
  {
    id: "d08178e1-d1f4-4f48-98e3-91760214e210",
    login: "Ivan2000",
    full_name: "Иванов Иван Иванович",
  },
  {
    id: "9f964b81-7d59-4d42-adc8-1fc878a20e9f",
    login: "OlgaSport",
    full_name: "Соколова Ольга Николаевна",
  },
  {
    id: "e2e10321-b873-4e71-b937-c0b81e5318fc",
    login: "PavelTrainer",
    full_name: "Кузьмин Павел Сергеевич",
  },
  {
    id: "d9feaa15-9601-476f-baee-a42df5ee17c1",
    login: "ViktorStrong",
    full_name: "Андреев Виктор Владимирович",
  },
];

export const workout: WorkoutType[] = [
  {
    id: "e699a8c7-08de-4a83-ae81-6451805f5ccd",
    event_id: events[0].id,
    participant_id: participants[0].id,
    coach_id: coaches[0].id,
  },
  {
    id: "fd8f706e-f0c2-45ea-bf74-186c638acdf5",
    event_id: events[0].id,
    participant_id: participants[1].id,
    coach_id: coaches[1].id,
  },
  {
    id: "0f6bab4f-925b-4dde-986d-4dd56776f323",
    event_id: events[0].id,
    participant_id: participants[2].id,
    coach_id: coaches[2].id,
  },
  {
    id: "4d9dff96-68fe-43a0-8e3c-97df67ced949",
    event_id: events[0].id,
    participant_id: participants[3].id,
    coach_id: coaches[3].id,
  },
];
