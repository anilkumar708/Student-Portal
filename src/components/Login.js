import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import img from "../components/images/hexaware-logo.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [authenticated, setauthenticated] = useState(
  //   localStorage.getItem(localStorage.getItem("authenticated") || false)
  // );
  const users = [{ username: "anil@gmail.com", password: "123451" }];

  const submitForm = (e) => {
    e.preventDefault();

    const account = users.find((user) =>
      user.username === username && user.password === password
        ? navigate("/home")
        : console.log("username & password should match")
    );
    if (account) {
      // localStorage.setItem("authenticated", true);
      return;
    }
  };
  return (
    <div className="login">
      <img src={img} alt="name" width={100} />
      <form onSubmit={submitForm}>
        <Typography variant="h4" marginBottom={"20px"}>
          Tech Login
        </Typography>

        <input
          type="email"
          name="email"
          value={username}
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          variant="contained"
          color="warning"
          type="submit"
          value="submit"
        >
          Login
        </Button>
      </form>

      {/* <div>
        {users.map((curElem) => {
          return (
            <div>
              <p>{curElem.username}</p>
              <p>{curElem.password}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Login;
