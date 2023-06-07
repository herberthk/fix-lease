import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Progress from "./Progress";
import CustomRating from "./Rating";
import { progressData } from "@/app/data";

export default class Reviews extends Component {
  render() {
    return (
      <Box mx={1} mt={4} mb={2}>
        <Typography fontSize={18} fontWeight={700}>
          Reviews
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <Box display="flex" flexDirection="column" gap={3} width="310px">
            <Typography color="blue" mt={1} fontSize={20} fontWeight={700}>
              9.6/10
            </Typography>
            {progressData.map(({ rating, text, value, id }) => (
              <Progress key={id} rating={rating} text={text} value={value} />
            ))}
          </Box>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography fontSize={16} fontWeight={700}>
              Excellent value for the price
            </Typography>
            <Typography fontSize={16} color="rgba(0,0,0,0.5)">
              Mark M
            </Typography>
            <Typography>
              We enjoyed our stay to this hotel, We will definitely come back!
            </Typography>
            <ul className="custom-list">
              <li>Great location</li>
              <li>Service</li>
              <li>Battle of champion in the room</li>
            </ul>
            <Typography mt={2} fontSize={18} fontWeight={700}>
              Good hotel but noisy location
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={4}>
            <CustomRating text="Excellent" value="10" />
            <Box textAlign="right" mt={6} color="rgba(0,0,0,0.5)">
              <Typography>Reviewed on</Typography>
              <Typography>20th September 2022</Typography>
            </Box>
            <Box mt={3}>
              <CustomRating text="Average" value="5.0" />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
