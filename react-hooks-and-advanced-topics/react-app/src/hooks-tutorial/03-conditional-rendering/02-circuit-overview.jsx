import { useState } from "react"

const CircuitOverview = () => {
  const [text, setText] = useState('')
  const [name, setName] = useState('susan')
  const [age, setAge] = useState(null)
  return (
    <div>
      <p>Falsy OR : {text || 'hello world'}</p> 
      <p>Falsy AND : {text && 'hello world'}</p>
      <p>Falsy OR : {name || 'hello world'}</p>
      <p>Falsy AND : {name && 'hello world'}</p>
      {/* 1: hello world, 2: empty string, 3: susan, 4: hello world */}
      <p>?? : {text ?? 'hello world'}</p>
      <p>?? : {name ?? 'hello world'}</p>
      <p>?? : {age ?? '25'}</p>
      {/* return fallback only for null or undefined */}
    </div>
  )
}
export default CircuitOverview