import React, {useState} from 'react'

 const Users = () => {

    const [users, setUsers] = 
    useState([{name:'rami'}, 
    {name:'marti'}, 
    {name:'maxi'}])

    const [name, setName] = 
    useState('')

    //const mario = {name:'Mario'}

    const handlerAddUser = () =>{
        setUsers([...users, {name}])
    }

    const handlerChange = (e) =>{
        setName(e.target.value)

    }

    const handlerReset = () => {
        setUsers([])
      }

  return (
    <>
    <h1>Lista de Users</h1>
    <ul>
        {users.map((user, i)=>(
            <li key={i}> {user.name} </li>
        ))}
    </ul>
    <input type="text" value={name} onChange={handlerChange}></input>
    <button onClick={handlerAddUser}>  Agregar a usuario</button>
    <button onClick={handlerReset}>Reset</button>
    </>
  )
}

export default Users