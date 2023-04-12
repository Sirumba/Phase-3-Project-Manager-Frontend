import React,{useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Register() {
    return (
        <div className="login-container" style={{background:"#242842", width:"100%", margin:"auto", height:"100vh"}}>
        <div style={{background:"gray", width:"40%", margin:"auto", height:"400px", borderRadius:"10px"}}>
          <Form onSubmit={handleSubmit} style={{display:"inline-block", padding:"20px"}}>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
    
              <Form.Control
                name={"name"}
                type="text"
                placeholder="Enter User Name"
                value={loginUser.name}
                onChange={handleChangeInput}
                style={{padding:"10px 100px"}}
              />
    
              <Form.Text className="text-muted">
                Give your User a memorable and informative name!
              </Form.Text>
            </Form.Group>
    
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Provide email"
                onChange={handleChangeInput}
                value={loginUser.email}
                style={{padding:"10px 100px"}}
              />
            </Form.Group>
    
    
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Provide password"
                onChange={handleChangeInput}
                value={loginUser.password}
                style={{padding:"10px 100px"}}
              />
            </Form.Group>
    
            <Button variant="primary" type="submit" style={{marginTop:"10px", padding:"10px 20px", background:"blue"}}>
              Submit
            </Button>
          </Form>
    
          <Button onClick={onCancelAddUser} variant="primary" type="text" style={{marginTop:"10px", padding:"10px 20px", background:"red"}}>
            Cancel
          </Button>
        </div>
        </div>
    );
}

export default Register
