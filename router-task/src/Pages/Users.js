import axios from 'axios';
import React from 'react'
import './users.css'
import UserCard from '../Components/UserCard'
import { CommonPage } from '../Components/CommonPage';
function Users() {
    const [state,setState]=React.useState();

    const getUsers=React.useCallback(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(({data})=>setState(data))
    },[])

    React.useEffect(()=>{
        getUsers()
    },[])
    
  return (
    <CommonPage>
      <div className='users-inside'>
        {state?.map((user)=>
        <UserCard name={user.name} username={user.username} email={user.email} key={user.id} id={user.id}/>
        )}
      </div>
    </CommonPage>
  )
}

export default Users