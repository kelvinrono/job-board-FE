import React from 'react'

function UserProfile({userInfo}) {
  return (
    <div className='user-profile-card card'>
        <h2>Welcome, {userInfo?.name}</h2>
          <p>Email: {userInfo?.email}</p>
          <p>Role: {userInfo?.role}</p>
    </div>
  )
}

export default UserProfile