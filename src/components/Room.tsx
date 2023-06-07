import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person4Icon from "@mui/icons-material/Person4";
import HotelIcon from "@mui/icons-material/Hotel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

type RoomType = {
  tittle: string;
  img: string;
  sqm: string;
  people: string;
  room: string;
  text: string;
  cost: string;
  id: number;
};
const rooms: RoomType[] = [
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

export default class Room extends Component {
  render() {
    return (
      <Box mx={1}>
        <Typography fontSize={18} fontWeight={700}>
          Rooms
        </Typography>
        <Box display="flex" flexWrap="wrap" mt={1} gap={6}>
          {rooms.map(({ cost, id, img, people, room, sqm, text, tittle }) => (
            <Stack
              key={id}
              display="flex"
              flexDirection="column"
              gap={1}
              boxShadow="0 0 20px rgba(0,0,0,0.2)"
              borderRadius={4}
              // width="290px"
              width={{ xs: "100%", md: "290px" }}
            >
              <Stack
                display="flex"
                position="relative"
                width={{ xs: "100%", md: "290px" }}
                height={140}
              >
                <Image
                  // width={290}
                  style={{ borderRadius: "15px" }}
                  // height={140}
                  src={img}
                  alt=""
                  fill
                />
              </Stack>

              <Typography px={1} fontSize={15} mt={1} fontWeight={700}>
                {tittle}
              </Typography>
              <Box display="flex" px={1} mt={1} flexDirection="column" gap={1}>
                <Box display="flex" gap={2}>
                  <DashboardIcon fontSize="small" />
                  <Typography>{sqm}</Typography>
                </Box>
                <Box display="flex" gap={2}>
                  <Person4Icon />
                  <Typography>{people}</Typography>
                </Box>
                <Box display="flex" gap={2}>
                  <HotelIcon />
                  <Typography>{room}</Typography>
                </Box>
              </Box>
              <Typography px={1} fontSize="14px">
                {text}
              </Typography>
              <Box textAlign="center" mb={2} px={2} width="100%">
                <Button
                  size="small"
                  sx={{ borderRadius: "25px", width: "100%" }}
                  variant="contained"
                >
                  Book now for {cost}
                </Button>
              </Box>
            </Stack>
          ))}
        </Box>
      </Box>
    );
  }
}
