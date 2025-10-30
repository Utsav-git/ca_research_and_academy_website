import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import type { NavItem } from "../../types/types";

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" className="w-100">
      {/* Add app bar for normal web view and mobile view too */}
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          {/* Avatar with image */}
          {/* <Avatar alt="Trader Logo" src="/path-to-logo.png" sx={{ mr: 2 }} /> */}
          {/* Or avatar with initials */}
          <IconButton
            sx={{
              border: "none",
            }}
            color="secondary"
            onClick={() => {
              console.log("Back to home...");
            }}
          >
            <Avatar sx={{ mr: 2 }}>TW</Avatar>

            {/* <Typography variant="h6" component="div">
              Trader Website
            </Typography> */}
          </IconButton>
        </Box>

        {navItems.map((item) => (
          <Button
            key={item.label}
            color="inherit"
            component={Link}
            to={item.path}
            sx={{ textTransform: "none" }}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
