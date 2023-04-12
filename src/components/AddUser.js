import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import AddUserForm from "./AddUserForm";

export default function AddUser({onAddNewUser, onCancelAddUser}){

    const [addUser, setAddUser] = useState(false)


    function onCancelAddUser() {
    setAddUser(false)
  }

  

  //if add user is false, show add user button, if add user is true, show add user form
    return(
        <div>
            
            {!addUser ? 
           
            <div className="d-grid gap-2">
            <Button 
            className='Add-user'
            variant="primary" 
            size="lg"
            onClick={()=>setAddUser((prev)=>!prev)}
            >
            Add New Team Member &#43;
            </Button>
            </div>



            : 
            <AddUserForm 
            onCancelAddUser={onCancelAddUser}
            onAddNewUser={onAddNewUser}
            setAddUser={setAddUser}
            /> }
        </div>
    )
}