import { useState } from 'react'

function Component() {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2>Events</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='text'
          id='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input type='email' name='email' id='email' value={email} onChange={handleChange} />
      </form>
    </div>
  )
}
export default Component
