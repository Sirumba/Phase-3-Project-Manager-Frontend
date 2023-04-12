import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

//pass this function a set helper function to update state and the current state as a prop so it can update the title shown on the button

export default function StatusDropDown({ onSetStatus, buttonTitle }) {
  return (
    <DropdownButton
      style={{ borderstyle: "solid" }}
      variant="light"
      id="dropdown-basic-button"
      title={
        buttonTitle ? `Status: ${buttonTitle}` : "Status: Choose a Status!"
      }
    >
      <Dropdown.Item
        href="#/action-1"
        onClick={(event) => onSetStatus(event.target.textContent)}
        style={{color:"white", background:"yellow", textDecoration:"none", margin:"5px"}}
      >
        On Hold
      </Dropdown.Item>

      <Dropdown.Item
        href="#/action-2"
        onClick={(event) => onSetStatus(event.target.textContent)}
        style={{color:"white", background:"red", textDecoration:"none", margin:"5px",}}
      >
        Ready to Start
      </Dropdown.Item>

      <Dropdown.Item
        href="#/action-3"
        onClick={(event) => onSetStatus(event.target.textContent)}
        style={{color:"white", background:"green", textDecoration:"none", margin:"5px", margin:"auto"}}
      >
        Working On It
      </Dropdown.Item>

      <Dropdown.Item
        href="#/action-3"
        onClick={(event) => onSetStatus(event.target.textContent)}
        style={{color:"white", background:"blue", textDecoration:"none", margin:"5px"}}
      >
        Completed
      </Dropdown.Item>
    </DropdownButton>
  );
}
