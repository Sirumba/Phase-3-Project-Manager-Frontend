import React from "react"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

//pass this function a set helper function to update state and the current state.[fill in the title] as a prop so it can update the title shown on the button. Also needs User list to generate menu options



export default function UserDropDown({onSetUser, buttonTitle, userList, userType}){


    const menuItems = userList.map(
        e=>
        <Dropdown.Item
         key={e.id}
         href="#/action-1"
         onClick={(event)=>onSetUser(event.target.textContent)}
         style={{textDecoration:"none", color:"black", marginLeft:"5px", background:"white", borderRadius:"2px", padding:"2px"}}
         >{e.name}</Dropdown.Item>
    )



    return(
    <DropdownButton style={{'borderstyle': 'solid'}} variant="light" id="dropdown-basic-button" title={buttonTitle ? `Creator: ${buttonTitle}` : `${userType}: Choose an existing User!`}>

       <div style={{margin:"10px"}}>
       {menuItems}
       </div>

    </DropdownButton>
    )
}