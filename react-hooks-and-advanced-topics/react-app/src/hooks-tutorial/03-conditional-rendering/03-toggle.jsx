import { useState } from 'react'

const Toggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <h2>
        {isLoggedIn ? 'Please login' : 'Hello'}
        <div>
          <button onClick={() => setIsLoggedIn((prev) => !prev)}>
            {isLoggedIn ? 'login' : 'logout'}
          </button>
        </div>
      </h2>
    </div>
  )
}
export default Toggle
