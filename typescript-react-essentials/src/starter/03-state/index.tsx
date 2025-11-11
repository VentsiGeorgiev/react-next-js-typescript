import { useState } from 'react'

type Link = {
  id: number
  url: string
  text: string
}

const navLinks = [
  { id: 1, url: '/home', text: 'home' },
  { id: 2, url: '/about', text: 'about us' },
  { id: 3, url: '/contact', text: 'contact us' },
]

function Component() {
  const [text, setText] = useState('hello')
  const [list, setList] = useState<string[]>([])
  const [navigation, setNavigation] = useState<Link[]>(navLinks)

  return (
    <div>
      <h2>State</h2>
      <p>{text}</p>
      <button onClick={() => setText('world')}>click me</button>
      <p>{list.join(' ').toUpperCase()}</p>
      <button onClick={() => setList(['hello', 'world'])}>click me</button>
      <ul>
        {navigation.map((n) => (
          <li key={n.id}>
            <a href={n.url}>{n.text}</a>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          setNavigation((prev) => [...prev, { id: 4, url: 'hello-world', text: 'hello world' }])
        }
      >
        add new navigation
      </button>
    </div>
  )
}
export default Component
