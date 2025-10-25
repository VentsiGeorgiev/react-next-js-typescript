import { useEffect, useState } from 'react'

const MultipleUseEffect = () => {
  const [value, setValue] = useState(0)
  const [secondValue, setSecondValue] = useState(0)

  useEffect(() => {
    console.log('first useEffect')
  }, [value])

  useEffect(() => {
    console.log('second useEffect')
  }, [secondValue])

  return (
    <>
      <h3>first: {value}</h3>
      <h3>second: {secondValue}</h3>
      <div>
        <button onClick={() => setValue((prev) => prev + 1)}>first</button>
      </div>
      <div>
        <button onClick={() => setSecondValue((prev) => prev + 1)}>second</button>
      </div>
    </>
  )
}
export default MultipleUseEffect
