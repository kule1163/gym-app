import { v4 as uuidv4 } from "uuid";
import HomeFirst from "../../assets/gym/homeBack.jpg";

export interface Post {
  id: string;
  img: string;
  type: string;
  date: string;
  info: string;
  bgColor: string;
  featured: boolean;
  header: string;
  secondaryHeader: string;
}

export const posts: Post[] = [
  {
    id: uuidv4(),
    img: HomeFirst,
    type: "EXERCISE",
    featured: false,
    header: "3 POST-WORKOUT MISTAKES AND HOW TO FIX THEM",
    secondaryHeader:
      "Explicabo ut ut molestiae beatae consequatur mollitia. Aut iusto reprehenderit. Aliquid id voluptas quia reprehenderit exercitationem neque. Non veritatis explicabo est beatae adipisci quo quaerat.Voluptatum amet aspernatur. Quia cumque amet. Sequi hic voluptates fuga dolores.",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit purus, tristique vitae dui ac, consectetur dictum felis. Cras tempor dolor ipsum, vitae aliquam tortor cursus sed. Vivamus porta justo et diam egestas interdum. In id erat ultrices, interdum tortor at, dignissim elit. Morbi et arcu auctor quam tincidunt tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed lobortis ullamcorper dolor, posuere fermentum eros sagittis sed Suspendisse at congue nibh, et imperdiet tortor. Nam placerat semper blandit. Proin pellentesque molestie fringilla. Suspendisse eu ex non sem porttitor pulvinar. Sed molestie massa ac convallis volutpat. Donec sit amet congue mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce non convallis odio. Quisque sapien tortor, tincidunt in magna a, euismod maximus lorem. In faucibus, arcu nec dictum mattis, sem ex tempus velit, et cursus mi ipsum non lorem. Curabitur egestas libero in molestie malesuada.",
    date: "01/2020",
    bgColor: "first",
  },
  {
    id: uuidv4(),
    img: HomeFirst,
    type: "NUTRITION",
    featured: true,
    header: "ARE BULGARIAN BAGS THE BEST NEW FITNESS TOOL?",
    secondaryHeader:
      "Explicabo ut ut molestiae beatae consequatur mollitia. Aut iusto reprehenderit. Aliquid id voluptas quia reprehenderit exercitationem neque. Non veritatis explicabo est beatae adipisci quo quaerat.Voluptatum amet aspernatur. Quia cumque amet. Sequi hic voluptates fuga dolores.",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit purus, tristique vitae dui ac, consectetur dictum felis. Cras tempor dolor ipsum, vitae aliquam tortor cursus sed. Vivamus porta justo et diam egestas interdum. In id erat ultrices, interdum tortor at, dignissim elit. Morbi et arcu auctor quam tincidunt tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed lobortis ullamcorper dolor, posuere fermentum eros sagittis sed Suspendisse at congue nibh, et imperdiet tortor. Nam placerat semper blandit. Proin pellentesque molestie fringilla. Suspendisse eu ex non sem porttitor pulvinar. Sed molestie massa ac convallis volutpat. Donec sit amet congue mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce non convallis odio. Quisque sapien tortor, tincidunt in magna a, euismod maximus lorem. In faucibus, arcu nec dictum mattis, sem ex tempus velit, et cursus mi ipsum non lorem. Curabitur egestas libero in molestie malesuada.",
    date: "01/2020",
    bgColor: "orange",
  },
  {
    id: uuidv4(),
    img: HomeFirst,
    type: "NUTRITION",
    featured: false,
    header: "DOES EXERCISE MAKE YOU HAPPIER THAN MONEY?",
    secondaryHeader:
      "Explicabo ut ut molestiae beatae consequatur mollitia. Aut iusto reprehenderit. Aliquid id voluptas quia reprehenderit exercitationem neque. Non veritatis explicabo est beatae adipisci quo quaerat.Voluptatum amet aspernatur. Quia cumque amet. Sequi hic voluptates fuga dolores.",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit purus, tristique vitae dui ac, consectetur dictum felis. Cras tempor dolor ipsum, vitae aliquam tortor cursus sed. Vivamus porta justo et diam egestas interdum. In id erat ultrices, interdum tortor at, dignissim elit. Morbi et arcu auctor quam tincidunt tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed lobortis ullamcorper dolor, posuere fermentum eros sagittis sed Suspendisse at congue nibh, et imperdiet tortor. Nam placerat semper blandit. Proin pellentesque molestie fringilla. Suspendisse eu ex non sem porttitor pulvinar. Sed molestie massa ac convallis volutpat. Donec sit amet congue mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce non convallis odio. Quisque sapien tortor, tincidunt in magna a, euismod maximus lorem. In faucibus, arcu nec dictum mattis, sem ex tempus velit, et cursus mi ipsum non lorem. Curabitur egestas libero in molestie malesuada.",
    date: "01/2020",
    bgColor: "first",
  },
  {
    id: uuidv4(),
    img: HomeFirst,
    type: "habits",
    featured: true,
    header: "5 DYNAMIC STRETCHES FOR YOUR UPPER BODY",
    secondaryHeader:
      "Explicabo ut ut molestiae beatae consequatur mollitia. Aut iusto reprehenderit. Aliquid id voluptas quia reprehenderit exercitationem neque. Non veritatis explicabo est beatae adipisci quo quaerat.Voluptatum amet aspernatur. Quia cumque amet. Sequi hic voluptates fuga dolores.",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit purus, tristique vitae dui ac, consectetur dictum felis. Cras tempor dolor ipsum, vitae aliquam tortor cursus sed. Vivamus porta justo et diam egestas interdum. In id erat ultrices, interdum tortor at, dignissim elit. Morbi et arcu auctor quam tincidunt tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed lobortis ullamcorper dolor, posuere fermentum eros sagittis sed Suspendisse at congue nibh, et imperdiet tortor. Nam placerat semper blandit. Proin pellentesque molestie fringilla. Suspendisse eu ex non sem porttitor pulvinar. Sed molestie massa ac convallis volutpat. Donec sit amet congue mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce non convallis odio. Quisque sapien tortor, tincidunt in magna a, euismod maximus lorem. In faucibus, arcu nec dictum mattis, sem ex tempus velit, et cursus mi ipsum non lorem. Curabitur egestas libero in molestie malesuada.",
    date: "01/2020",
    bgColor: "third",
  },
];
