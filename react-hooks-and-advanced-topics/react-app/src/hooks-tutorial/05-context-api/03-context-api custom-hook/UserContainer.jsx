import { useAppContext } from './Navbar'

const UserContainer = () => {
  const { user, logout } = useAppContext()
  if (user) {
    return (
      <div>
        <p>using context api with custom hook</p>
        <h4>Hi {user.name}!</h4>
        <button onClick={() => logout()}>logout</button>
      </div>
    )
  }
}
export default UserContainer
