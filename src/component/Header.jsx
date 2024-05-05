import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../assets/react.svg";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import '../styles/HeaderStyles.css'; // Import your custom CSS file

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" className="h-16" />
      </Typography>
      <Divider />
      <ul className="custom-f-class mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/home"} className="custom-f-class text-white">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"} className="custom-f-class text-white">Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className="custom-f-class text-white">About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className="custom-f-class text-white">Contact</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="logo" className="h-16" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="flex flex-row gap-4">
                <li>
                  <NavLink activeClassName="active" to={"/"} className="text-white">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"} className="text-white">Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"} className="text-white">About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"} className="text-white">Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
