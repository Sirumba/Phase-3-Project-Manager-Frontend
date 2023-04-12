import UserCard from "./UserCard";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import AddProject from "./AddProject";

export default function ArchiveContainer({
  projects,
  onClickDeleteButton,
  onEditProject,
  userList,
  onAddNewProject,
  currentUser,
}) {
  const CompleteProjects = projects.filter((e) => e.status === "Completed");

  const projectCards = CompleteProjects.map((e) => (
    <ProjectCard
      key={e.id}
      project={e}
      onClickDeleteButton={onClickDeleteButton}
      onEditProject={onEditProject}
      userList={userList}
      currentUser={currentUser}
    />
  ));

  return (
    <div className="completed--projects" style={{border:"2px solid", background:"#242842", height:"100%"}}>
      <h1 style={{color:"aqua"}}>Completed Projects</h1>
      {projectCards}
    </div>
  );
}
