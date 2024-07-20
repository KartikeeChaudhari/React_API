import React,{useState,useEffect} from 'react';
import './Api.css';
const Api = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
   const loadUsers=async ()=>{
    const response=await fetch("https://reqres.in/api/users");
    const data=await response.json();
    setUsers(data.data);
   }
   loadUsers();
  }, []);
  return (
    <>
      <h1>Working With <span>React</span> API</h1>
      <div className='container'>
       {users.map(item=>{ 
        return(
          <>
          <div className='box' key={item.id}>
          <img src={item.avatar} alt={item.first_name}></img>
          <h3>{item.first_name} {item.last_name}</h3>
          <p>{item.email}</p>
          </div>
          </>
        )
       })}
      </div>
    </>
  )
}

export default Api