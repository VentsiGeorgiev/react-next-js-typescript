const UserContainer = ({ user, logout }) => {
  if (user) {
    return (
      <div>
        <h4>Hi {user.name}!</h4>
        <button onClick={() => logout()}>logout</button>
      </div>
    )
  }
}
export default UserContainer
