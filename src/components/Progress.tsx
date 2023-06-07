import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { ProgressProps } from "@/interface";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Progress: FC<ProgressProps> = ({ rating, text, value }) => {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between">
        <Typography>{text} </Typography>
        <Typography>{rating}</Typography>
      </Box>
      <BorderLinearProgress variant="determinate" value={value} />
    </Box>
  );
};

export default Progress;
