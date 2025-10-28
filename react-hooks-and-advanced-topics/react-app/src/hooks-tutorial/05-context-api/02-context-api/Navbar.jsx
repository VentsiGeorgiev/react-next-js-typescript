import { useState } from 'react'
import NavLinks from './NavLinks'
import { createContext } from 'react'

export const NavbarContext = createContext()

const NavbarC = () => {
  const [user, setUser] = useState({ name: 'john' })
  const logout = () => {
    setUser(null)
  }
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <header>
        <nav>
          <h2>API Context</h2>
          <NavLinks user={user} logout={logout} />
        </nav>
      </header>
    </NavbarContext.Provider>
  )
}
export default NavbarC
