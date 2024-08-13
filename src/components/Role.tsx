import React, { useEffect, useState } from "react";

const Role = () => {
  const [number, setNumber] = useState("1");
  const [data, setData] = useState("");
  const numberChange = (e) => {
    setNumber(e.target.value);
  };

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const user = await res.json();
      setData(user);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>WELCOME TO ROLES</h1>
      <form>
        <label>Number</label>
        <input onChange={numberChange} value={number} />
      </form>
      <p>Number :{number}</p>
    </div>
  );
};

export default Role;
