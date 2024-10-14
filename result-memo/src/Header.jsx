import React from "react";
import { Typography, Box } from "@mui/material";
import Logo from "./assets/logo.png";

const ColoredLine = ({ color, height }) => (
  <hr
    style={{
      border: 0,
      backgroundColor: color,
      height: height || 2,
      width: "100%",
    }}
  />
);

const Header = ({ resultType }) => {
  return (
    <>
      <Box mb={2} display="flex" alignItems="center" flexDirection="column">
        <Box display="flex" alignItems="center" mb={2}>
          <img src={Logo} alt="NIT Warangal Logo" width={100} height={100} />
          <Box ml={2}>
            <Typography variant="h5" fontWeight="bold">
              NATIONAL INSTITUTE OF TECHNOLOGY WARANGAL
            </Typography>
            <Typography variant="body1">Warangal, Telangana, 506004</Typography>
            <Typography variant="body1">Website: nitw.ac.in</Typography>
          </Box>
        </Box>

        <ColoredLine color="black" />
        <Typography variant="h5" fontWeight="bold" mt={2}>
          {resultType === "individual" ? "Individual" : "Consolidated"} Result
        </Typography>
      </Box>
      <ColoredLine color="#D3D3D3" height={5} />
    </>
  );
};

export default Header;
