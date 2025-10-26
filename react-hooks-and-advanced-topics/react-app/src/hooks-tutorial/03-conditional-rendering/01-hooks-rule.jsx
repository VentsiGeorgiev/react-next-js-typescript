import { useEffect, useState } from 'react'

const HooksRole = () => {
  const [condition, setCondition] = useState(true)
  if (condition) {
    // won't work
    const [state, setState] = useState(false)
  }

  if (condition) {
    return <h2>Hi there</h2>
  }
  // won't work
  useEffect(() => {
    console.log('hi there')
  }, [])

  return <div>HooksRole</div>
}
export default HooksRole
