import { v4 as uuidv4 } from "uuid";

export interface ScheduleDayChildren {
  id: string;
  text: string;
  time: string;
}

export interface ScheduleItem {
  id: string;
  symbol: string;
  day: string;
  children: ScheduleDayChildren[];
}

export const schedules: ScheduleItem[] = [
  {
    id: uuidv4(),
    symbol: "s",
    day: "sunday",
    children: [
      { id: uuidv4(), text: "cardio", time: "6 am - 8 am" },
      { id: uuidv4(), text: "aerobic", time: "8 am - 10 am" },
      { id: uuidv4(), text: "yoga", time: "10 am - 12 pm" },
      { id: uuidv4(), text: "crossfit", time: "12 pm - 2 pm" },
      { id: uuidv4(), text: "cycling", time: "2 pm - 4 pm" },
      { id: uuidv4(), text: "fitness", time: "4 pm - 6 pm" },
      { id: uuidv4(), text: "mua tai", time: "6 pm - 8 pm" },
      { id: uuidv4(), text: "pilates", time: "8 pm - 10 pm" },
    ],
  },
  {
    id: uuidv4(),
    symbol: "m",
    day: "monday",
    children: [
      { id: uuidv4(), text: "cardioo", time: "6 am - 8 am" },
      { id: uuidv4(), text: "aerobic", time: "8 am - 10 am" },
      { id: uuidv4(), text: "yoga", time: "10 am - 12 pm" },
      { id: uuidv4(), text: "crossfit", time: "12 pm - 2 pm" },
      { id: uuidv4(), text: "cycling", time: "2 pm - 4 pm" },
      { id: uuidv4(), text: "fitness", time: "4 pm - 6 pm" },
      { id: uuidv4(), text: "mua tai", time: "6 pm - 8 pm" },
      { id: uuidv4(), text: "pilates", time: "8 pm - 10 pm" },
    ],
  },
  {
    id: uuidv4(),
    symbol: "t",
    day: "tuesday",
    children: [
      { id: uuidv4(), text: "cardiooo", time: "6 am - 8 am" },
      { id: uuidv4(), text: "aerobic", time: "8 am - 10 am" },
      { id: uuidv4(), text: "yoga", time: "10 am - 12 pm" },
      { id: uuidv4(), text: "crossfit", time: "12 pm - 2 pm" },
      { id: uuidv4(), text: "cycling", time: "2 pm - 4 pm" },
      { id: uuidv4(), text: "fitness", time: "4 pm - 6 pm" },
      { id: uuidv4(), text: "mua tai", time: "6 pm - 8 pm" },
      { id: uuidv4(), text: "pilates", time: "8 pm - 10 pm" },
    ],
  },
  {
    id: uuidv4(),
    symbol: "w",
    day: "wednesday",
    children: [
      { id: uuidv4(), text: "cardiooooo", time: "6 am - 8 am" },
      { id: uuidv4(), text: "aerobic", time: "8 am - 10 am" },
      { id: uuidv4(), text: "yoga", time: "10 am - 12 pm" },
      { id: uuidv4(), text: "crossfit", time: "12 pm - 2 pm" },
      { id: uuidv4(), text: "cycling", time: "2 pm - 4 pm" },
      { id: uuidv4(), text: "fitness", time: "4 pm - 6 pm" },
      { id: uuidv4(), text: "mua tai", time: "6 pm - 8 pm" },
      { id: uuidv4(), text: "pilates", time: "8 pm - 10 pm" },
    ],
  },
  {
    id: uuidv4(),
    symbol: "t",
    day: "thursday",
    children: [
      { id: uuidv4(), text: "cardioooooo", time: "6 am - 8 am" },
      { id: uuidv4(), text: "aerobic", time: "8 am - 10 am" },
      { id: uuidv4(), text: "yoga", time: "10 am - 12 pm" },
      { id: uuidv4(), text: "crossfit", time: "12 pm - 2 pm" },
      { id: uuidv4(), text: "cycling", time: "2 pm - 4 pm" },
      { id: uuidv4(), text: "fitness", time: "4 pm - 6 pm" },
      { id: uuidv4(), text: "mua tai", time: "6 pm - 8 pm" },
      { id: uuidv4(), text: "pilates", time: "8 pm - 10 pm" },
    ],
  },
  {
    id: uuidv4(),
    symbol: "f",
    day: "friday",
    children: [
      { id: uuidv4(), text: "cardio", time: "6 am - 8 am" },
      { id: uuidv4(), text: "aerobic", time: "8 am - 10 am" },
      { id: uuidv4(), text: "yoga", time: "10 am - 12 pm" },
      { id: uuidv4(), text: "crossfit", time: "12 pm - 2 pm" },
      { id: uuidv4(), text: "cycling", time: "2 pm - 4 pm" },
      { id: uuidv4(), text: "fitness", time: "4 pm - 6 pm" },
      { id: uuidv4(), text: "mua tai", time: "6 pm - 8 pm" },
      { id: uuidv4(), text: "pilates", time: "8 pm - 10 pm" },
    ],
  },
  {
    id: uuidv4(),
    symbol: "s",
    day: "saturday",
    children: [
      { id: uuidv4(), text: "cardio", time: "6 am - 8 am" },
      { id: uuidv4(), text: "aerobic", time: "8 am - 10 am" },
      { id: uuidv4(), text: "yoga", time: "10 am - 12 pm" },
      { id: uuidv4(), text: "crossfit", time: "12 pm - 2 pm" },
      { id: uuidv4(), text: "cycling", time: "2 pm - 4 pm" },
      { id: uuidv4(), text: "fitness", time: "4 pm - 6 pm" },
      { id: uuidv4(), text: "mua tai", time: "6 pm - 8 pm" },
      { id: uuidv4(), text: "pilates", time: "8 pm - 10 pm" },
    ],
  },
];
