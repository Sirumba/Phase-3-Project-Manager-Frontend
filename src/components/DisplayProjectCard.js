import React from "react";
import "../App.css";

export default function DisplayProjectCard({
  project,
  handleDelete,
  handleClickEdit,
  currentUser,
}) {
  const fullDate = (date) =>
    new Date(date).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  const fullTime = (date) => new Date(date).toLocaleTimeString();

  const buttons = (
    <>
      <button onClick={handleClickEdit}>Edit This Project</button>
      <button onClick={() => handleDelete(project.id)}>
        Delete This Project
      </button>
    </>
  );

  //const currentUser =  sessionStorage.token ? JSON.parse(sessionStorage.token) : ''
  //const currentUser = ''

  return (
    <div className="project-card">
      <div className="project-list">
        <h3>{project.name}</h3>
        <ul>
          <li>Created by: {project.author}</li>
          <li>Project Status: {project.status}</li>
          <li>
            Date Created:{" "}
            {`${fullDate(project.date)} at ${fullTime(project.date)}`}
          </li>

          {project.status === "Completed" ? (
            <li>
              {" "}
              {`Date Completed: ${fullDate(project.date)} at ${fullTime(
                project.statusChangeOn
              )}`}
            </li>
          ) : null}
        </ul>
      </div>

      <div className="project-card-buttons">
        {currentUser.name === project.author || currentUser.name === "admin"
          ? buttons
          : null}
      </div>
    </div>
  );
}
