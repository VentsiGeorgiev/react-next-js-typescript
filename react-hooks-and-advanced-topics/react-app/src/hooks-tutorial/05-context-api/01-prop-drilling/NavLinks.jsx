import UserContainer from './UserContainer'

const NavLinks = ({ user, logout }) => {
  return (
    <div>
      <ul>
        <li>
          <a href='/home'>Home</a>{' '}
        </li>
        <li>
          <a href='/About'>About</a>{' '}
        </li>
        <li>
          <a href='/contact'>Contact</a>{' '}
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  )
}
export default NavLinks
