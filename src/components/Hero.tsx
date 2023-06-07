import React, { Component } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem/ImageListItem";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import CustomRating from "./Rating";
import { listItem } from "@/app/data";

export default class Hero extends Component {
  render() {
    return (
      <Box display="flex" flexDirection="column" mx={1} gap={3}>
        <Box width="100%">
          <ImageList
            sx={{ width: "auto", height: 320 }}
            cols={4}
            variant="quilted"
            gap={6}
          >
            {listItem.map(({ cols, rows, img, title, id }) => (
              <ImageListItem
                key={id}
                cols={cols || 1}
                rows={rows || 1}
                sx={{
                  maxHeight: "317px",
                  height: !cols ? "157px!important" : "315px",
                }}
              >
                <Image
                  src={img}
                  fill
                  alt={title}
                  loading="lazy"
                  style={{
                    borderRadius: "17px",
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
        >
          <Box display="flex" flexDirection="column">
            <Typography fontSize={18} fontWeight={700}>
              Hotel Norrebro
            </Typography>
            <Typography>3-star hotel located in heart of copenhagen</Typography>
          </Box>
          <CustomRating text="Excellent" value="9.0" review="1,920 reviews" />
        </Box>
      </Box>
    );
  }
}
