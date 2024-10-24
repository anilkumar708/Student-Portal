import React from "react";
import {
  TableBody,
  TableCell,
  TableHead,
  Table,
  TableRow,
  Button,
} from "@mui/material";

import { getUsers, deleteUsers } from "../Service/api";
import { getNode } from "../Service/node";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  const [node, setNode] = useState([]);

  const getUserDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  const getNodeDetails = async () => {
    let response = await getNode();
    console.log(response.data);
    setNode(response.data);
  };

  const deleteUsersData = async (id) => {
    await deleteUsers(id);
    getUserDetails();
  };

  useEffect(() => {
    getUserDetails();
    getNodeDetails();
  }, []);

  return (
    <div>
      <div className="user">
        <h1>USERS INFORMATION</h1>
        <Link to={"/adduser"}>
          <Button className="right" variant="contained">
            Add User
          </Button>
        </Link>
      </div>

      <Table>
        <TableHead>
          <TableRow className="table-r">
            <TableCell style={{ fontWeight: "700", fontSize: "16px" }}>
              Id
            </TableCell>
            <TableCell style={{ fontWeight: "700", fontSize: "16px" }}>
              Name
            </TableCell>
            <TableCell style={{ fontWeight: "700", fontSize: "16px" }}>
              Phone
            </TableCell>
            <TableCell style={{ fontWeight: "700", fontSize: "16px" }}>
              Email
            </TableCell>
            <TableCell style={{ fontWeight: "700", fontSize: "16px" }}>
              Location
            </TableCell>
            <TableCell style={{ fontWeight: "700", fontSize: "16px" }}>
              Gender
            </TableCell>
            <TableCell style={{ fontWeight: "700", fontSize: "16px" }}>
              Status
            </TableCell>
            <TableCell style={{ fontWeight: "700", fontSize: "16px" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((User) => (
            <TableRow>
              <TableCell>{User.id}</TableCell>
              <TableCell>{User.name}</TableCell>
              <TableCell>{User.phone}</TableCell>
              <TableCell>{User.email}</TableCell>
              <TableCell>{User.location}</TableCell>
              <TableCell>{User.gender}</TableCell>
              <TableCell>{User.status}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  component={Link}
                  to={`/edit/${User.id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  style={{ marginLeft: "5px" }}
                  onClick={() => deleteUsersData(User.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default User;
