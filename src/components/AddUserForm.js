import React, {useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AddUser from "./AddUser";


export default function AddUserForm({
  onAddNewUser,
  onCancelAddUser,
  setAddUser,
}) {
  const [newUser, setNewUser] = useState({ name: "", image: "",email:"", password: "" });

  function handleChangeInput(event) {
    const updatedUser = { ...newUser, [event.target.name]: event.target.value };
    setNewUser(updatedUser);
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((d) => onAddNewUser(d));

    setAddUser(false);
  }

  return (
    <>
      <Form onSubmit={handleSubmit} style={{width:"50%", position:"absolute", bottom:"50px", background:"gray", borderRadius:"10px", padding:"10px"}}>
        <Form.Group className="mb-3" style={{width:"80%", marginLeft:"10px"}}>
          <Form.Label>User Name</Form.Label>

          <Form.Control
            name={"name"}
            type="text"
            placeholder="Enter User Name"
            value={newUser.name}
            onChange={handleChangeInput}
          />

          <Form.Text className="text-muted">
            Give your User a memorable, but informative name!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" style={{width:"80%", marginLeft:"10px"}}>
          <Form.Label>image URL</Form.Label>
          <Form.Control
            name="image"
            type="text"
            placeholder="Provide an image URL"
            onChange={handleChangeInput}
            value={newUser.image}
          />
        </Form.Group>

        <Form.Group className="mb-3" style={{width:"80%", marginLeft:"10px"}}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="text"
            placeholder="Provide email"
            onChange={handleChangeInput}
            value={newUser.email}
          />
        </Form.Group>
        <Form.Group className="mb-3" style={{width:"80%", marginLeft:"10px"}}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Provide email"
            onChange={handleChangeInput}
            value={newUser.password}
          />
        </Form.Group>
         
         <div style={{padding:"10px"}}>
        <Button variant="primary" type="submit" style={{background:"blue"}}>
          Submit
        </Button>
        <Button onClick={onCancelAddUser} variant="primary" type="text">
        Cancel
      </Button>
      </div>
      </Form>
    </>
  );
}
