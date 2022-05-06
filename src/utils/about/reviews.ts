import {v4 as uuidv4} from "uuid"
import Image from "../../assets/gym/homeBack.jpg"

interface ReviewItem {
    id: string;
    img: string;
    job: string;
    name: string;
    content: string;
}

export const reviews:ReviewItem[] = [
    {id: uuidv4(), job: "LAWYER", img: Image , name: "ALEXANDER JOHNSON", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim urna id dolor."},
    {id: uuidv4(), job: "DESIGNER", img: Image , name: "JANICE ANDERSON", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim urna id dolor."},
    {id: uuidv4(), job: "MANAGER", img: Image , name: "DONOVAN RICHARDSON", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim urna id dolor."},
    {id: uuidv4(), job: "ARCHITECT", img: Image , name: "SANDRA HENDERSON", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim urna id dolor."},
]