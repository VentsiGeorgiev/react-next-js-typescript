import { useState, createContext, useContext } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext = createContext()

export const useAppContext = () => {
  return useContext(NavbarContext)
}

const NavbarCh = () => {
  const [user, setUser] = useState({ name: 'john' })
  const logout = () => setUser(null)

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <header>
        <nav>
          <h2>API Context</h2>
          <NavLinks />
        </nav>
      </header>
    </NavbarContext.Provider>
  )
}

export default NavbarCh
