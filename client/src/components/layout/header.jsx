import React, { useContext } from "react";
import { AppBar, Typography, Button, Avatar } from "@mui/material";
import { FaBars } from "react-icons/fa";

const Header = (props) => {
  return (
    <AppBar
      position="sticky"
      color="primary"
      className="top-0 left-0 w-full rounded-lg p-2 mb-4"
    >
      <div className="flex flex-row justify-between items-center">
        <button className="flex md:hidden" onClick={props.onClick}>
          <FaBars className="text-xlg" />
        </button>
        <h2 className="hidden md:flex md:text-lg">
          <a href="/">Logo</a>
        </h2>
        <div className="w-3/5 hidden md:flex md:flex-row md:justify-between">
          <Button variant="contained" color="secondary">
            Students
          </Button>
          <Button variant="contained" color="secondary">
            Courses
          </Button>
        </div>
        <Avatar />
      </div>
    </AppBar>
  );
};

export default Header;
