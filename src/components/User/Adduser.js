/* eslint-disable react-hooks/rules-of-hooks */

import {
  FormControl,
  FormGroup,
  Button,
  styled,
  InputLabel,
  Input,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: auto;
  & > div {
    margin-top: 20px;
  }
`;

const initialValues = {
  name: "",
  phone: "",
  email: "",
  location: "",
  gender: "",
  status: "",
};

const Adduser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const addUserDetails = async () => {
    await addUser(user);
    navigate("/user");
  };
  return (
    <Container>
      <h1>NEW USERS</h1>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <InputLabel>Location</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="location" />
      </FormControl>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          onChange={(e) => onValueChange(e)}
          name="gender"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          onChange={(e) => onValueChange(e)}
          name="status"
        >
          <FormControlLabel value="active" control={<Radio />} label="Active" />
          <FormControlLabel
            value="inactive"
            control={<Radio />}
            label="Inactive"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <Button onClick={() => addUserDetails()} variant="contained">
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default Adduser;
