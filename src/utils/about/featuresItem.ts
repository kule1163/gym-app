import {v4 as uuidv4} from "uuid"

interface FeaturesItem {
    id: string;
    text: string;
}

export const featuresItems:FeaturesItem[] = [
    {id: uuidv4(), text: "Free Wi-Fi"},
    {id: uuidv4(), text: "Free Parking"},
    {id: uuidv4(), text: "Free Wights"},
    {id: uuidv4(), text: "+50 Trainers"},
    {id: uuidv4(), text: "+50k Clients"},
    {id: uuidv4(), text: "+50 Arenas"},
]

