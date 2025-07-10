import React from 'react'

interface UserCardProps{
    profile: string,
    name: string,
    email: string,
    isActive?: Boolean
}

function UserCard({profile, name, email, isActive= false}: UserCardProps){
  return (
    <div className='text-center text-black text-2xl border-2 w-80 mx-auto rounded-2xl bg-white'>
      <img src={profile}/>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}

export default UserCard