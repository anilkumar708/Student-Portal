import { Typography } from "@mui/material";
import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <>
      <Typography variant="body2">{month}</Typography>
      <Typography variant="body2">{day}</Typography>
      <Typography variant="body2">{year}</Typography>
    </>
  );
};

export default ExpenseDate;
