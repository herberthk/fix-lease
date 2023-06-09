"use client";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Room from "@/components/Room";
import Reviews from "@/components/Reviews";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Stack
        display="flex"
        flexDirection="column"
        gap={2}
        my={1}
        // mx={{ md: 7, xs: 1 }}
      >
        <Box display="flex">
          <IconButton href="/" color="inherit" component={Link}>
            <ArrowBackIcon fontSize="medium" />
          </IconButton>
        </Box>
        <Hero />
        <Description />
        <Room />
        <Reviews />
      </Stack>
    </Container>
  );
}
