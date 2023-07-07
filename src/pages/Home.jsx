import axios from "axios";
import { useEffect, useState } from "react";
import User from "../components/User.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 500);
  }, []);

  function renderUsers(){
    return users.map((user) => (
      <Link to={`users/${user.id}`} key={user.id}>
        <User
          id={user.id} 
          name={user.name} 
          email={user.email} 
          username={user.username} 
        />
      </Link>
    ))
  }

  function renderSkeletonLoading(){
    return <h1>Loading...</h1>
  }
  return (
      <>
        {users.length? renderUsers() : renderSkeletonLoading()}
      </>
  );
}

export default Home;
