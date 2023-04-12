import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import "./App.css";
import ProjectContainer from "./components/ProjectContainer";
import ArchiveContainer from "./components/ArchiveContainer";
import Login from "./components/LogIn";
import Footer from "./components/Footer";

function App() {
  const [userList, setUserList] = useState([]);

  const [projects, setProjects] = useState([]);

  const [currentUser, setCurrentUser] = useState("");

  //use effect for on each load of app component because otherwise upon refresh currentuser state will forget

  //fetch users
  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((d) => setUserList(d));
  }, []);

  // fetch projects
  useEffect(() => {
    fetch("http://localhost:9292/projects")
      .then((r) => r.json())
      .then((d) => setProjects(d));
  }, []);

  

  useEffect(

    //only if user is in session storage is either on the userList or is Admin, both with correct password, setCurrentUser to that upon refresh
    () => {
      const newCurrentUser = sessionStorage.token
        ? JSON.parse(sessionStorage.token)
        : "";

      const isAdmin =
        newCurrentUser.name === "admin" && newCurrentUser.password === "123" && newCurrentUser.email === "admin@gmail.com" ;

      const user = userList.filter((e) => e.name === newCurrentUser.name && e.password === newCurrentUser.password && e.email=== newCurrentUser.email)[0];

      const isUser =
        user && user.password === newCurrentUser.password ? true : false;

      isUser || isAdmin ? setCurrentUser(newCurrentUser) : setCurrentUser("");

      console.log(isUser);
    },
    [userList]
  );
  

  //helper functions for logging in and out

  function handleLogout() {
    sessionStorage.setItem("token", "");
    setCurrentUser("");
  }

  function handleUserLogin(obj) {
    sessionStorage.setItem("token", JSON.stringify(obj));
    setCurrentUser(obj);
  }

  function handleUserRegistration(){

  }

  //helper functions for Projects Page
  function onClickDeleteButton(id) {
    const updatedProjectList = projects.filter((e) => e.id !== id);
    setProjects(updatedProjectList);
  }

  function onEditProject(obj) {
    const updatedProjectList = projects.map((e) => (e.id === obj.id ? obj : e));
    setProjects(updatedProjectList);
  }

  function onAddNewProject(newProject) {
    const updatedProjectList = [...projects, newProject];
    setProjects(updatedProjectList);
  }

  //helper functions for members page

  function onAddNewUser(newUser) {
    const newUserList = [...userList, newUser];
    setUserList(newUserList);
  }

  function handleDeleteUser(id) {
    const newUserList = userList.filter((e) => e.id !== id);
    setUserList(newUserList);
  }

  let images = userList.map((e) => e.image);
  // console.log(images);


  return (
    <div>
      <NavBar
        handleLogout={handleLogout}
        currentUser={currentUser}
        className="html"
      />
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/users"
          element={
            <CardContainer
              userList={userList}
              onAddNewUser={onAddNewUser}
              handleDeleteUser={handleDeleteUser}
              projects={projects}
              currentUser={currentUser}
            />
          }
        />
        <Route
          exact
          path="/projects"
          element={
            <ProjectContainer
              projects={projects}
              onClickDeleteButton={onClickDeleteButton}
              onEditProject={onEditProject}
              onAddNewProject={onAddNewProject}
              userList={userList}
              currentUser={currentUser}
            />
          }
        />
        <Route
          exact
          path="/archives"
          element={
            <ArchiveContainer
              projects={projects}
              onClickDeleteButton={onClickDeleteButton}
              onEditProject={onEditProject}
              onAddNewProject={onAddNewProject}
              userList={userList}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login handleUserLogin={handleUserLogin} userList={userList} />
          }
        />
        <Route
          path="/register"
          element={
            <Login handleUserRegistration={handleUserRegistration} userList={userList} />
          }
        />
      </Routes>
      <Footer/>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
