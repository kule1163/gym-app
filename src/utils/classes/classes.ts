import {v4 as uuidv4, v4} from "uuid"

interface ClassItem {
    id: string;
    text: string;
}

export const classes:ClassItem[] = [
    {id: uuidv4(), text: "Cardio"},
    {id: uuidv4(), text: "Aerobic"},
    {id: uuidv4(), text: "Fitness"},
    {id: uuidv4(), text: "Cycling"},
    {id: uuidv4(), text: "Yoga"},
    {id: uuidv4(), text: "Muai Tai"},
]