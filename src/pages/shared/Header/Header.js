import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", fontSize: "h4.fontSize" }}
            color="secondary"
          >
            rucksacks
          </Typography>
          <Tabs aria-label="basic tabs example">
            <Tab
              component={NavLink}
              style={{
                color: "#fff",
                fontWeight: "bold",
                borderBottom: "2px solid transparent",
              }}
              activeStyle={{
                color: "#fcc39d",
                borderBottom: "2px solid #fcc39d",
              }}
              to="/shop"
              label="Shop"
            />
            <Tab
              component={NavLink}
              style={{
                color: "#fff",
                fontWeight: "bold",
                borderBottom: "2px solid transparent",
              }}
              activeStyle={{
                color: "#fcc39d",
                borderBottom: "2px solid #fcc39d",
              }}
              to="/something"
              label="Shop"
            />
          </Tabs>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
