import { useState } from "react"

const CounterExample = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrease = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <section>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    </section>
  )
}
export default CounterExample