import { useEffect, useState } from 'react'

const CleanUpFunction = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div style={{minHeight: '1000px'}}>
      <button onClick={() => setToggle(!toggle)}>toggle component</button>
      {toggle && <RandomComponent />}
    </div>
  )
}

const RandomComponent = () => {
  // setInterval example:
  // useEffect(() => {
  //   console.log('hm... this is interesting')

  //   const intervalId = setInterval(() => {
  //     console.log('hey')
  //   }, 1000)

  //   return () => {
  //     clearInterval(intervalId)
  //   }
  // }, [])
  useEffect(() => {
    const somefunc = () => {
      console.log('random function')
    }
    window.addEventListener('scroll', somefunc)

    return () => {
      window.removeEventListener('scroll', somefunc)
    }
  })
  return (
    <>
      <div>
        <h2>Hi There!</h2>
      </div>
    </>
  )
}
export default CleanUpFunction
