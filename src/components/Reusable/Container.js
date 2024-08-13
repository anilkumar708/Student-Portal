import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Drawer, ListItem, ListItemText } from "@mui/material";
import img from "../images/hexaware-logo.jpg";
import Passwords from "../Passwords/Passwords";

class Container extends React.Component {
  constructor(props) {
    super();
    this.state = { menuOpen: false };
  }

  sidebar = () => {
    const navigationToPage = (destination) => {
      window.location.assign(destination);
    };
    return (
      <Drawer
        open={this.state.menuOpen}
        onClick={() => {
          this.setState({ menuOpen: false });
        }}
      >
        <img src={img} alt="name" width={100} />
        <ListItem
          button
          onClick={() => {
            navigationToPage("/home");
          }}
        >
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            navigationToPage("/user");
          }}
        >
          <ListItemText primary={"Users"} />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            navigationToPage("/role");
          }}
        >
          <ListItemText primary={"Role"} />
        </ListItem>
      </Drawer>
    );
  };
  header = () => {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                onClick={() => {
                  this.setState({ menuOpen: true });
                }}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Welcome Anil
              </Typography>
              <Passwords />
              <Link to="/login">
                <Button
                  sx={{ backgroundColor: "black", color: "whitesmoke", ml: 2 }}
                >
                  Logout
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  };

  // footer = () => {
  //   return (
  //     <div
  //       style={{
  //         position: "static",
  //         backgroundColor: "#1976d2",
  //         color: "black",
  //         textAlign: "center",
  //         padding: "10px 0px 1px 0px",
  //       }}
  //     >
  //       <h5>Copyrights Reserves @2022</h5>
  //     </div>
  //   );
  // };

  render() {
    return (
      <div>
        {this.sidebar()}
        {this.header()}
        {this.props.children}
        {/* {this.footer()} */}
      </div>
    );
  }
}

export default Container;
