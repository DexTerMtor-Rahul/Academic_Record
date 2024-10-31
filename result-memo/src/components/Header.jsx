import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications as NotificationIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import Logo from "../assets/logo_white.png";

const drawerWidth = 240;

const Header = ({ handleDrawerToggle }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        ml: { sm: `${drawerWidth}px` },
        bgcolor: "#343a40",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
          }}
        >
          <img src={Logo} alt="NIT Warangal Logo" width={80} height={80} />
          <Typography variant="h6" sx={{ ml: 2, fontSize: 40 }}>
            NITW
          </Typography>
        </Box>

        <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
          <IconButton>
            <NotificationIcon style={{ color: "white" }} />
          </IconButton>
          <IconButton sx={{ ml: 1 }}>
            <SettingsIcon style={{ color: "white" }} />
          </IconButton>
          <Avatar sx={{ ml: 1 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
