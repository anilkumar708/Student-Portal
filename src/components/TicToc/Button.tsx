import styled from "@emotion/styled";
import React from "react";

export function Square() {
  return <button></button>;
}
const Board = () => {
  return (
    <>
      <First>
        <Square />
        <Square />
        <Square />
      </First>
      <First>
        <Square />
        <Square />
        <Square />
      </First>
      <First>
        <Square />
        <Square />
        <Square />
      </First>
    </>
  );
};

const First = styled.div`
  display: flex;
  padding: 10px;
`;

export default Board;
