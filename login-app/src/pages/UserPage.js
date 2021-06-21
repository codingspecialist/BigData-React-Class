import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/user")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>User Page</h1>
      <hr />
      <h1>유저 정보 테이블</h1>
      {users.map((user) => (
        <>
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>
              {user.id} {user.username}
            </Card.Header>
            <Card.Body>
              <Card.Title>{user.email}</Card.Title>
              <Card.Text>{user.password}</Card.Text>
            </Card.Body>
          </Card>
          <br />
        </>
      ))}
    </div>
  );
};

export default UserPage;
