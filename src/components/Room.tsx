import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person4Icon from "@mui/icons-material/Person4";
import HotelIcon from "@mui/icons-material/Hotel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { rooms } from "@/app/data";

export default class Room extends Component {
  render() {
    return (
      <>
        <Typography fontSize={18} fontWeight={700}>
          Rooms
        </Typography>
        <Box display="flex" flexWrap="wrap" mt={1} gap={3}>
          {rooms.map(({ cost, id, img, people, room, sqm, text, tittle }) => (
            <Stack
              key={id}
              display="flex"
              flexDirection="column"
              gap={1}
              boxShadow="0 0 20px rgba(0,0,0,0.2)"
              borderRadius={4}
              sx={{
                transitionTimingFunction: "linear",
                transition: "all",
                transitionDuration: "500ms",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
              width={{ xs: "100%", md: "270px" }}
            >
              <Stack
                display="flex"
                position="relative"
                width={{ xs: "100%", md: "270px" }}
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
      </>
    );
  }
}
