"use client";
import React, { FC, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Loader from "./common/Loader";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
//@ts-ignore
import { useWindowSize } from "@uidotdev/usehooks";

interface Prop {
  lat: number;
  lng: number;
}
const MapComponent: FC<Prop> = ({ lat, lng }) => {
  const size = useWindowSize();
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

  const mapContainerStyle = {
    width: matchDownMd ? `${size.width - 20}px` : "320px",
    height: "320px",
  };
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
  });

  const center = useMemo(
    () => ({
      lat,
      lng,
    }),
    [lat, lng]
  );

  return (
    <>
      {!isLoaded ? (
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          height="100%"
          textAlign="center"
        >
          <Loader />
        </Box>
      ) : (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={{ lat, lng }} />
        </GoogleMap>
      )}
    </>
  );
};

export default MapComponent;
