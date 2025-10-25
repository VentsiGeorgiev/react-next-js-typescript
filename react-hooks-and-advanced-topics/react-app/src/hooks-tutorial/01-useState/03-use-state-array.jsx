import { useState } from 'react'

const data = [
  { id: 112, name: 'apple' },
  { id: 223, name: 'orange' },
  { id: 334, name: 'banana' },
]

const ArrayExample = () => {
  const [fruits, setFruits] = useState(data)

  const clearFruitList = () => {
    setFruits([])
  }

  const removeFruitItem = (id) => {
    setFruits((prev) => prev.filter((el) => el.id !== id))
  }

  return (
    <section>
      <h2>array example</h2>
      <ul>
        {fruits.map((f) => {
          return (
            <li key={f.id}>
              {f.name} <button onClick={() => removeFruitItem(f.id)}>X</button>
            </li>
          )
        })}
      </ul>
      {fruits.length > 0 && <button onClick={clearFruitList}>clear list</button>}
    </section>
  )
}
export default ArrayExample
