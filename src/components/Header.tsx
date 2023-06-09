"use client";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React, { Component } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent="space-between"
          py={{ md: 3, xs: 2 }}
          // px={{ md: 8, xs: 1 }}
          spacing={1}
          borderBottom="1px solid #ccc"
        >
          <Stack direction="row" spacing={{ md: 4, xs: 2 }}>
            <Typography
              fontSize={20}
              href="/"
              color="#000"
              fontWeight={700}
              component={Link}
              mr={{ md: 4, xs: 1 }}
            >
              Tripster
            </Typography>
            <Typography
              href="/properties"
              color="#000"
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              component={Link}
            >
              Properties
            </Typography>
            <Typography
              href="/attractions"
              color="#000"
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              component={Link}
            >
              Attractions
            </Typography>
            <Typography
              href="/popular"
              color="#000"
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              component={Link}
            >
              Popular
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} textAlign={{ xs: "center" }}>
            <Button
              size="small"
              sx={{
                borderRadius: "25px",
                padding: "5px 20px",
              }}
              variant="outlined"
            >
              Sign up
            </Button>
            <Button
              size="small"
              sx={{
                borderRadius: "25px",
                padding: "5px 20px",
              }}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </div>
    );
  }
}
