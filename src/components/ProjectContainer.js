import UserCard from "./UserCard";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import AddProject from "./AddProject";
import "../App.css";

export default function ProjectContainer({
  projects,
  onClickDeleteButton,
  onEditProject,
  userList,
  onAddNewProject,
  currentUser,
}) {
  const [addProject, setAddProject] = useState(false);

  const notCompleteProjects = projects.filter((e) => e.status !== "Completed");

  const projectCards = notCompleteProjects.map((e) => (
    <ProjectCard
      key={e.id}
      project={e}
      onClickDeleteButton={onClickDeleteButton}
      onEditProject={onEditProject}
      userList={userList}
      currentUser={currentUser}
    />
  ));

  const onHoldCards = notCompleteProjects.map((e) =>
    e.status === "On Hold" ? (
      <ProjectCard
        key={e.id}
        project={e}
        onClickDeleteButton={onClickDeleteButton}
        onEditProject={onEditProject}
        userList={userList}
        currentUser={currentUser}
      />
    ) : null
  );

  const readyToStartCards = notCompleteProjects.map((e) =>
    e.status === "Ready to Start" ? (
      <ProjectCard
        key={e.id}
        project={e}
        onClickDeleteButton={onClickDeleteButton}
        onEditProject={onEditProject}
        userList={userList}
        currentUser={currentUser}
      />
    ) : null
  );

  const workingOnItCards = notCompleteProjects.map((e) =>
    e.status === "Working On It" ? (
      <ProjectCard
        key={e.id}
        project={e}
        onClickDeleteButton={onClickDeleteButton}
        onEditProject={onEditProject}
        userList={userList}
        currentUser={currentUser}
      />
    ) : null
  );

  function onCancelAdd() {
    setAddProject(false);
  }

  return (
    <div className="project-container" style={{background:"#242842", width:"100%", margin:"auto", position:"relative"}}>
      <div style={{border:"2px solid orange", width:"50%"}}>
      <h1>Projects</h1>
      {projectCards}
      </div>
      
      <div style={{border:"2px solid yellow", width:"50%"}}>
      <h2>On Hold</h2>
      {onHoldCards}
      </div>

      <div style={{border:"3px solid red",width:"50%"}}>
      <h2>Ready to Start</h2>
      {readyToStartCards}
      </div>
      <div style={{border:"3px solid green", width:"50%"}}>
      <h2>Working on It</h2>
      {workingOnItCards}
      </div>
      
      <div className="Add--project">
      <AddProject
        addProject={addProject}
        setAddProject={setAddProject}
        onAddNewProject={onAddNewProject}
        onCancelAdd={onCancelAdd}
        userList={userList}
      />
      </div>
      
    </div>
  );
}
