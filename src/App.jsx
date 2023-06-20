import { useEffect, useState } from 'react'

import './App.css'

function App() {
  // const [products , setProducts ] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect (()=>{
    fetch('http://localhost:5000/users')
    .then (res => res.json())
    .then (data => setUsers(data))
    
  },[])

  console.log(users)
  

  // useEffect(() => {
  //   fetch('http://localhost:5000/users')
  //     .then(res => res.json())
  //     .then(data => setUsers(data))
  //   // .then ( data => console.log (data))

  // }, [])

  const handelAddUser = event => {
    event.preventDefault ();
    const form = event.target;
    const name = form.name.value ;
    const email = form.email.value;
  }

  return (
    <>
    <h1>This is the client side .</h1>     

      <div>
        
        {
          users.map(user => <div>
            <h1 key={user.id}>{user?.name} </h1>
            <h3>{user.email}</h3>
            <h3>{user.id}</h3>
            
            </div>)
        }
      </div>
    </>
  )
}

export default App
