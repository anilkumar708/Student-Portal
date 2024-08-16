import styled from "@emotion/styled";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Role = () => {
  const [number, setNumber] = useState("0");
  const [data, setData] = useState<any[]>([]);
  const numberChange = (e) => {
    setNumber(e.target.value);
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const user = await res.json();
      setData(user);
    } catch (error) {
      console.log("Error while fetching the data", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Main>
      <h1>WELCOME TO ROLES</h1>
      <form>
        <label>Number</label>
        <input onChange={numberChange} value={number} type="Number" />
      </form>
      <p>Number :{number}</p>
      <Details>
        {data.map((item) => (
          <List key={item.id}>{item.title}</List>
        ))}
      </Details>
    </Main>
  );
};
const Main = styled.section`
  margin: auto;
  width: 80%;
`;

const Details = styled.ul`
  display: flex;
  overflow: auto;
`;

const List = styled.li`
  list-style: none;
`;

export default Role;
