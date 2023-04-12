import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import StatusDropDown from "./StatusDropDown";
import UserDropDown from "./UserDropDown";
import "../App.css";

export default function AddProjectForm({
  onCancelAdd,
  onAddNewProject,
  setAddProject,
  userList,
}) {
  
  const [newProject, setNewProject] = useState({
    name: "",
    author: "",
    status: "",
    date: ""
  });

  function handleChangeInput(event) {
    const updatedProject = {
      ...newProject,
      [event.target.name]: event.target.value,
    };
    setNewProject(updatedProject);
  }

  function onSetStatus(status) {
    const updatedProject = { ...newProject, status: status };
    setNewProject(updatedProject);
  }

  function onSetUser(author) {
    const updatedProject = { ...newProject, author: author };
    setNewProject(updatedProject);
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:9292/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newProject),
    })
      .then((r) => r.json())
      .then((d) => onAddNewProject(d));

    setAddProject(false);
  }

  return (
    <Form
      style={{height:"40vh", width:"400px"}}
      className="project-card"
      onSubmit={(e) =>
        newProject.name && newProject.status
          ? handleSubmit(e)
          : ((e) => {
              e.preventDefault();
              alert("fill out all fields");
            })(e)
      }
    >
      <div className="project-list">
        <h3>
          <>Project Title:</>
          <input
            name="name"
            value={newProject.name}
            onChange={handleChangeInput}
          ></input>
        </h3>
        <div className="dropdown">
          <div style={{margin:"auto"}}>
            <UserDropDown
              buttonTitle={newProject.author}
              onSetUser={onSetUser}
              userList={userList}
              userType="Project Creator"
            />
          </div>
          <div style={{margin:"auto"}}>
            <StatusDropDown
              buttonTitle={newProject.status}
              onSetStatus={onSetStatus}
            />
          </div>
        </div>
      </div>

      <div className="project-card-buttons">
        <Button variant="outline-dark" type="button" onClick={onCancelAdd}>
          Cancel
        </Button>

        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}
