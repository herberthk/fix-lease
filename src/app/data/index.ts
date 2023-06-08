import { ImgProps, ProgressProps, RoomType } from "@/interface";

export const listItem: ImgProps[] = [
  {
    img: "/assets/pexels1.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
    id: 1,
  },
  {
    img: "/assets/pexels2.jpg",
    title: "Breakfast",
    id: 2,
  },
  {
    img: "/assets/pexels3.jpg",
    title: "Breakfast",
    id: 3,
  },
  {
    img: "/assets/pexels4.jpg",
    title: "Breakfast",
    id: 4,
  },
  {
    img: "/assets/pexels5.jpg",
    title: "Breakfast",
    id: 5,
  },
];

export const progressData: ProgressProps[] = [
  {
    id: 1,
    rating: "10/10",
    text: "Clean ness",
    value: 100,
  },
  {
    rating: "7/10",
    text: "Amenities",
    value: 70,
    id: 2,
  },
  {
    id: 3,
    rating: "9/10",
    text: "Location",
    value: 90,
  },
];

export const rooms: RoomType[] = [
  {
    id: 1,
    img: "/assets/pexels1.jpg",
    cost: "$180",
    people: "2 people",
    sqm: "15 sqm",
    room: "1 queen bed or 2 separate beds",
    text: "Non-refundable, Breakfast included",
    tittle: "Double standard room",
  },
  {
    id: 2,
    cost: "$220",
    img: "/assets/pexels2.jpg",
    people: "2 people",
    room: "1 long main bed",
    sqm: "21 sqm",
    text: "Non-refundable, Breakfast included",
    tittle: "Comfort single room",
  },
  {
    id: 3,
    cost: "$250",
    img: "/assets/pexels3.jpg",
    people: "2 people",
    room: "1 long main bed",
    sqm: "25 sqm",
    text: "Non-refundable, Breakfast included",
    tittle: "Double standard room",
  },
  {
    id: 4,
    cost: "$280",
    img: "/assets/pexels4.jpg",
    people: "2 people",
    room: "1 king size bed and cough",
    sqm: "35 sqm",
    text: "Non-refundable, Breakfast included",
    tittle: "Double fancy room",
  },
];
