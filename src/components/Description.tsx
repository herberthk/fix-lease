import React, { Component, FC } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import LocalParkingSharpIcon from "@mui/icons-material/LocalParkingSharp";
import WatchLaterSharpIcon from "@mui/icons-material/WatchLaterSharp";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import BathroomIcon from "@mui/icons-material/Bathroom";
import AirIcon from "@mui/icons-material/Air";
import Stack from "@mui/material/Stack";
import { IState, TabPanelProps } from "@/interface";
import MapComponent from "./Map";

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const TabPanel: FC<TabPanelProps> = ({ index, value, children, ...rest }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...rest}
    >
      {value === index && <Box mt={2}>{children}</Box>}
    </Box>
  );
};

class Overview extends Component {
  render() {
    return (
      <>
        <Typography fontSize={18} fontWeight={700}>
          Property Overview
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
        >
          <Stack
            direction={{ md: "row", sm: "column" }}
            spacing={{ md: 4, xs: 1 }}
          >
            <Box display="flex" flexDirection="column" mt={2} gap={4}>
              <Box display="flex" gap={2}>
                <WifiOutlinedIcon />
                <Typography>Free wifi</Typography>
              </Box>
              <Box display="flex" gap={2}>
                <AirIcon />
                <Typography>Air Conditioning</Typography>
              </Box>
              <Box display="flex" gap={2}>
                <BathroomIcon fontSize="small" />
                <Typography>Private bathroom</Typography>
              </Box>
              <Box display="flex" gap={2}>
                <ContactMailIcon fontSize="small" />
                <Typography>Key card access</Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" mt={2} gap={4}>
              <Box display="flex" gap={2}>
                <LocalParkingSharpIcon />
                <Typography>Free Parking</Typography>
              </Box>
              <Box display="flex" gap={2}>
                <WatchLaterSharpIcon />
                <Typography>24 hour from desk</Typography>
              </Box>
            </Box>
          </Stack>
          <Stack direction="column">
            <MapComponent lat={-3.745} lng={-38.523} />
          </Stack>
        </Box>
      </>
    );
  }
}

export default class Description extends Component<any, IState> {
  state = { value: 0 };

  handleChange = (event: React.SyntheticEvent, newValue: number) => {
    this.setState({ value: newValue });
  };

  render() {
    return (
      <Box mx={1}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Rooms" {...a11yProps(1)} />
            <Tab label="Amenities" {...a11yProps(2)} />
            <Tab label="Policies" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={this.state.value} index={0}>
          <Overview />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          Rooms
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          Amenities
        </TabPanel>
        <TabPanel value={this.state.value} index={3}>
          Policies
        </TabPanel>
      </Box>
    );
  }
}
