import { useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  const [user, setUser] = useState({ name: 'john' })
  const logout = () => {
    setUser(null)
  }
  return (
    <header>
      <nav>
        <p>using prop drilling</p>
        <h2>Prop drilling</h2>
        <NavLinks user={user} logout={logout} />
      </nav>
    </header>
  )
}
export default Navbar
