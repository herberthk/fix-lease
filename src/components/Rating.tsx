import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { RatingType } from "@/interface";

const colors: Record<string, string> = {
  Excellent: "green",
  Average: "orange",
  Poor: "red",
};

const bgColor: Record<string, string> = {
  Excellent: "#b2ebb2",
  Average: "#f2e3c7",
  Poor: "#f6a391",
};

export default class CustomRating extends Component<RatingType, unknown> {
  constructor(props: RatingType | Readonly<RatingType>) {
    super(props);
  }
  render() {
    const { text, value, review } = this.props;

    if (review) {
      return (
        <Box display="flex" gap={2}>
          <Box display="flex" flexDirection="column">
            <Typography color={colors[text]} fontSize={18} fontWeight={700}>
              {text}
            </Typography>
            <Typography component="small">{review}</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography
              fontSize={16}
              bgcolor={bgColor[text]}
              fontWeight="bold"
              borderRadius="25px"
              py={1}
              px={3}
              color={colors[text]}
            >
              {value}
            </Typography>
          </Box>
        </Box>
      );
    }

    return (
      <Box display="flex" gap={2}>
        <Typography fontSize={18} color={colors[text]} mt={1} fontWeight={700}>
          {text}
        </Typography>

        <Typography
          fontSize={16}
          bgcolor={bgColor[text]}
          fontWeight="bold"
          borderRadius="25px"
          py={1}
          px={3}
          color={colors[text]}
        >
          {value}
        </Typography>
      </Box>
    );
  }
}
