import React from 'react'
import LeftBar from '../../Components/Leftsidebar/LeftBar';
import UsersList from '../Use/UsersList';
import '../Use/Users.css'

const Users = ({slidein}) => {
  return (
    <div className="home-container-1">
      <LeftBar slidein={slidein}/>
      <div className="home-container-2" style={{marginTop:"30px"}}>
          <h1 style={{fontWeight:"400"}}>Users</h1>
          <UsersList/>
          </div>
          </div>
  )
}

export default Users
