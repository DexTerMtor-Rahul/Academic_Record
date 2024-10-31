import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  Person2 as Person2Icon,
  School as SchoolIcon,
  Gite as Hostel,
} from "@mui/icons-material";

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const drawerContent = (
    <Box sx={{ p: 2 }}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <Person2Icon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SchoolIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Academic" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Hostel style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Hostel" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            marginTop: 14,
            boxSizing: "border-box",
            width: drawerWidth,
            background: "#343a40",
            color: "white",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            marginTop: 14,
            boxSizing: "border-box",
            width: drawerWidth,
            background: "#343a40",
            color: "white",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
