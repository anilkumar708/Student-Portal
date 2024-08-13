import { Button } from "@mui/material";
import React from "react";

const Passwords = () => {
  const popupHandler = () => {
    alert("Save Passwords");
  };
  return (
    <div>
      <Button
        sx={{ backgroundColor: "black", color: "white" }}
        onClick={popupHandler}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Passwords;
