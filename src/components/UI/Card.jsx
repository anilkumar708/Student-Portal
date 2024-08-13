import React from "react";

const Card = (props) => {
  return (
    <div sx={{ width: "100%", backgroundColor: "#f34576" }}>
      {props.children}
    </div>
  );
};

export default Card;
