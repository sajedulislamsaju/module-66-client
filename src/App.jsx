import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [products , setProducts ] = useState();
  useEffect (()=>{
    fetch('')
    .then (res => res.json())
    .then (data => console.log(data))
  })
  const [users, setUsers] = useState();

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

    <form onSubmit={handelAddUser}>
      <input type="text" name="name" id="" />
      <br />
      <input type="email" name="email" id="" />
      <br />
      <input type="submit" value="Ddd me" />
    </form>
      <h1>Module Management of the project .</h1>

      <div>
        
        {/* {
          users.map (user => <h1 key={user.id}>{user?.neme}</h1>)
        } */}
      </div>
    </>
  )
}

export default App
