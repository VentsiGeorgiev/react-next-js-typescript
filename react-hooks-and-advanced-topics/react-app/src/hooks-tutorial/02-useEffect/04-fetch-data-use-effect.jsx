import { useEffect, useState } from 'react'

const FetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users')
        if (!response.ok) {
          throw new Error('Server error')
        }
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        throw error instanceof Error ? error : new Error(String(error))
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.login}</li>
        ))}
      </ul>
    </>
  )
}
export default FetchData
