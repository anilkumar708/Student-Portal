import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import User from "./components/User/User.js";
import Role from "./components/Role.tsx";
import Container from "./components/Reusable/Container.js";
import Adduser from "./components/User/Adduser.js";
import Edituser from "./components/User/Edituser.js";
import CallBack from "./components/DexGt/CallBack.jsx";
import BlogPost from "./components/Blogs/BlogPost.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <Container>
              <Home />
            </Container>
          }
        />
        <Route
          path="/user"
          element={
            <Container>
              <User />
            </Container>
          }
        />
        <Route
          path="/adduser"
          element={
            <Container>
              <Adduser />
            </Container>
          }
        />
        <Route
          path="/role"
          element={
            <Container>
              <Role />
            </Container>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <Container>
              <Edituser />
            </Container>
          }
        />
        <Route
          path="/callback"
          element={
            <Container>
              <CallBack />
            </Container>
          }
        />
        <Route
          path="/blogs"
          element={
            <Container>
              <BlogPost />
            </Container>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
