import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'


export default function NavBar({currentUser, handleLogout}) {
    

    return (

      <>
      <Nav fill variant="tabs" style={{display:"flex", margin:"20px" , height:"70px", alignItems:"center"}} >
      <Nav.Item className="Nav--item">
        <Nav.Link className="Nav--link" href="/" eventKey="/">HOME</Nav.Link>
      </Nav.Item>

      <Nav.Item className="Nav--item">
        <Nav.Link className="Nav--link" href="/users" eventKey="/users" >TEAM MEMBERS
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className="Nav--item">
        <Nav.Link className="Nav--link" href='/projects' eventKey="/projects">PROJECTS</Nav.Link>
      </Nav.Item>

      <Nav.Item className="Nav--item">
        <Nav.Link className="Nav--link" href='/archives' eventKey="/archives">COMPLETED PROJECTS</Nav.Link>
      </Nav.Item>

      
      <Nav.Item className="Nav--item">
        <div className="right--items login" >
        {currentUser ? 
        <>
        <button className="logout" onClick={handleLogout}>LOGOUT</button>
        <div className="login--text" style={{marginBottom:"40px", color:"green"}}>Logged in as {currentUser.name}</div>
        </>
        :
        <Nav.Link className="Nav--link" href='/login' eventKey="/login">LOGIN</Nav.Link>
        }
        </div>
      </Nav.Item>
      <div className="right--items registration">
      <Nav.Item className="Nav--item">
        <Nav.Link className="Nav--link" href='/register' eventKey="/register">REGISTER</Nav.Link>
      </Nav.Item>
      </div>
    </Nav>


        </>
          
    )}

    