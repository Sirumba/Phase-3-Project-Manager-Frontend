import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import StatusDropDown from "./StatusDropDown";
import UserDropDown from "./UserDropDown";
import "../App.css";

export default function EditProjectCard({
  project,
  handleClickEdit,
  handlePatch,
  userList,
}) {
  const [newProject, setNewProject] = useState(project);

  function handleChangeInput(event) {
    const updatedProject = {
      ...newProject,
      [event.target.name]: event.target.value,
    };
    setNewProject(updatedProject);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handlePatch(newProject);

    handleClickEdit();
  }

  function onSetStatus(status) {
    const now = new Date().toLocaleString();

    const updatedProject = {
      ...newProject,
      status: status,
      statusChangeOn: now,
    };

    setNewProject(updatedProject);
  }

  function onSetUser(user) {
    const updatedProject = { ...newProject, author: user };
    setNewProject(updatedProject);
  }

  return (
    <Form className="project-card" onSubmit={handleSubmit}>
      <div className="project-list">
        <h3>
          <input
            name="name"
            value={newProject.name}
            onChange={handleChangeInput}
          ></input>
        </h3>
        <ul>
          <li>
            <UserDropDown
              buttonTitle={newProject.author}
              onSetUser={onSetUser}
              userList={userList}
            />
          </li>
          <li>
            <StatusDropDown
              buttonTitle={newProject.status}
              onSetStatus={onSetStatus}
            />
          </li>
        </ul>
      </div>

      <div className="project-card-buttons">
        <Button variant="outline-dark" type="button" onClick={handleClickEdit}>
          Cancel
        </Button>

        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}
