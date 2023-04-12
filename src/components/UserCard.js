import Card from 'react-bootstrap/Card';
import  '../App.css';
import React, {useState, useEffect} from 'react';




function UserCard({user, handleDeleteUser, projects, currentUser}) {

  const usersProjects =projects.filter(e=>e.author===user.name)

  const userCompletedProjects = usersProjects.filter(e=>e.status==='Completed')
  

function onDelete(event){
  
  fetch(`http://localhost:9292/users/${user.id}`, {method: "DELETE"});
  
  handleDeleteUser(user.id)

}
// userList
const [userList, setUserList] = useState([]);
//fetch users
useEffect(() => {
  fetch("http://localhost:9292/users")
    .then((r) => r.json())
    .then((d) => setUserList(d));
}, []);

console.log(userList)

let userId
userId = userList.map((e) => (console.log(e.id)))

const [memberList, setMemberList] = useState([])
function handleView(e){
  e.preventDefault()
  fetch(`http://localhost:9292/members`)
  .then(res => res.json())
  .then(d => setMemberList(d))
}

console.log(memberList);


  return (
  <div className="user-card" style={{background:"#242842",height:"100vh"}}>
        
        <Card style={{background:"gray", margin:"10px", height:"300px", marginTop:"100px",borderRadius:"10px"}}>
            <Card.Img variant="top" src={user.image} style={{width:"70px"}} />
            <Card.Body>
              <Card.Title style={{color:"white",fontWeight:"bold",textAlign:"center"}}>{user.name}</Card.Title>
              <Card.Text style={{textAlign:"center"}}>
                {`${user.name} has created ${usersProjects.length } projects, and completed ${userCompletedProjects.length} projects`}
                
              </Card.Text>
              {currentUser.name === user.name || currentUser.name === 'admin' ? <button onClick={onDelete}>Delete this User.</button> : null}
              {currentUser.name === user.name || currentUser.name === 'admin' ? <button onClick={handleView}>View Members.</button> : null}
              <Card.Text>

                {
                  memberList.filter((member) => (member.user_id === user.id?
                  memberList.map((member,index) => (
                      <li key={index}>{member.name}</li>
                  )): null
                  ))
                }
              </Card.Text>
            </Card.Body>
          </Card>

  </div>
  );
} 

export default UserCard;
