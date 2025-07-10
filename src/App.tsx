import UserCard from './components/userCard'
import './App.css'

function App() {
  const user = {
    profile: '/assets/user2.png',
    names: "hugue",
    email: "hugue@gmail.com",
  }

  return (
    <>
      <div className='bg-gray-200'>
        <UserCard profile={user.profile} name ={user.names} email={user.email} />
      </div>
    </>
  )
}

export default App
