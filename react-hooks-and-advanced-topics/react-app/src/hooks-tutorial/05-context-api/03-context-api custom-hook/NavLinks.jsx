import UserContainer from './UserContainer'

const NavLinks = () => {
  return (
    <div>
      <p></p>
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
      <UserContainer />
    </div>
  )
}
export default NavLinks
