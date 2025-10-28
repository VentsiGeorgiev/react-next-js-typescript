import './App.css'
import { useGlobalContext } from './context'

function App() {
  const { name } = useGlobalContext()
  return (
    <>
      <h1>Setting up the context</h1>
      <p>{name}</p>
    </>
  )
}

export default App
