/* eslint-disable react-hooks/exhaustive-deps */
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
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUsers, updateUsers } from "../Service/api";

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

const Edituser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const data = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location,
      gender: user.gender,
      status: user.status,
    };
    let response = await editUsers(id, data);
    setUser(response.data);
    //console.log(response);
  };
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //console.log(user);
  };
  const updateUserDetails = async () => {
    await updateUsers(user, id);
    navigate("/user");
  };
  return (
    <Container>
      <h1>UPDATE USERS</h1>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Location</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="location"
          value={user.location}
        />
      </FormControl>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          onChange={(e) => onValueChange(e)}
          name="gender"
          value={user.gender}
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
          value={user.status}
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
        <Button onClick={() => updateUserDetails()} variant="contained">
          Update User
        </Button>
      </FormControl>
    </Container>
  );
};

export default Edituser;
