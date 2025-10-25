import { useEffect, useState } from "react"

const ExampleUseEffect = () => {
  const [value, setValue] = useState(0)

  const helloThere = () => {
    console.log('hello there')
  }

  // on mount, on props change and called after each render this function will be called
  helloThere()

  const helloWorld = () => {
    console.log('hello world')
  }

  // called only when component mounts 
  useEffect(() => {
    helloWorld()
  }, [])

  return (
    <>
      <h3>{value}</h3>
      <button onClick={() => setValue((prev) => prev + 1)}>+</button>
    </>
  )
}
export default ExampleUseEffect