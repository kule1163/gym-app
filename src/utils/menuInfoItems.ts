import {v4 as uuidv4} from "uuid"
import HomeFirst from "../assets/gym/homeBack.jpg"

interface MenuInfoItem {
    id: string;
    img: string;
    type: string;
    date: string;
    info: string;
    bgColor: string;
}

export const menuInfoItems:MenuInfoItem[] = [
    {id: uuidv4(), img: HomeFirst, type: "workout", info:"DOES EXERCISE MAKE YOU HAPPIER THAN MONEY?", date: "01/2020", bgColor: "first"},
    {id: uuidv4(), img: HomeFirst, type: "workout", info:"DOES EXERCISE MAKE YOU HAPPIER THAN MONEY?", date: "01/2020", bgColor: "orange"},
    {id: uuidv4(), img: HomeFirst, type: "workout", info:"DOES EXERCISE MAKE YOU HAPPIER THAN MONEY?", date: "01/2020", bgColor: "first"},
    {id: uuidv4(), img: HomeFirst, type: "workout", info:"DOES EXERCISE MAKE YOU HAPPIER THAN MONEY?", date: "01/2020", bgColor: "third"},
]