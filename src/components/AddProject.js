import React from "react";
import Button from 'react-bootstrap/Button'
import AddProjectForm from "./AddProjectForm";

export default function AddProject({addProject, setAddProject, onAddNewProject, onCancelAdd, userList}){

    

    return(
        <div>
            {
            //if you add project
            addProject ? 
            //display add project form
            <AddProjectForm setAddProject={setAddProject} onCancelAdd={onCancelAdd} onAddNewProject={onAddNewProject} userList={userList}/> 
            
            : 
            //else display add project button
            <div className="d-grid gap-2">
                <Button 
                className='add-something-button'
                variant="primary" 
                size="lg"
                onClick={()=>setAddProject((prev)=>!prev)}>
                Add New Project &#43;
                </Button>
            </div>}
        </div>
    )
}