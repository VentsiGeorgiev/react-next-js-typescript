import Component from './starter/02-props'

function App() {
  return (
    <main>
      <Component name='john' id={1234} />
      <Component name='john' id={1234}>
        <h3>Hello World</h3>
      </Component>
    </main>
  )
}

export default App
