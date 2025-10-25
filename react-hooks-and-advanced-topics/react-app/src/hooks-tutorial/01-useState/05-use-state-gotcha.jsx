import { useState } from 'react'

const UseStatePrev = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setTimeout(() => {
      console.log(': clicked times')
      setValue((prev) => prev + 1)
    }, 3000)
  }

  return (
    <div>
      <h3>{value}</h3>
      <button onClick={handleClick}>+</button>
    </div>
  )
}
export default UseStatePrev
