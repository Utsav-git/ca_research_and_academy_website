import React from "react";
import { AppBar, Toolbar, Button, Avatar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { navItems } from "../../constants/constants";

const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed" className="w-100">
      {/* Add app bar for normal web view and mobile view too */}
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Avatar
            src="https://plus.unsplash.com/premium_photo-1661602011150-6c6f8b9ba788?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
            sx={{ mr: 2, width: 60, height: 60 }}
          >
            TW
          </Avatar>
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
