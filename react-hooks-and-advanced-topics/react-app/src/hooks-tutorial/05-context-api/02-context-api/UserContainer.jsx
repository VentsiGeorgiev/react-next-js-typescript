import { useContext } from 'react'
import { NavbarContext } from './Navbar'

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext)
  if (user) {
    return (
      <div>
        <p>using context api</p>
        <h4>Hi {user.name}!</h4>
        <button onClick={() => logout()}>logout</button>
      </div>
    )
  }
}
export default UserContainer
