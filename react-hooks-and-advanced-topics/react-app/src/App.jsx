import './App.css'
// useState
// import CounterExample from './hooks-tutorial/01-useState/02-use-state-basics'
// import ArrayExample from './hooks-tutorial/01-useState/03-use-state-array'
// import ObjectExample from './hooks-tutorial/01-useState/04-use-state-object'
// import UseStatePrev from './hooks-tutorial/01-useState/05-use-state-gotcha'

//  useEffect
// import ExampleUseEffect from './hooks-tutorial/02-useEffect/02-useEffect-hook'
// import MultipleUseEffect from './hooks-tutorial/02-useEffect/03-multiple-useEffect-hook'
// import FetchData from './hooks-tutorial/02-useEffect/04-fetch-data-use-effect'

// Conditional rendering
// import CircuitOverview from './hooks-tutorial/03-conditional-rendering/02-circuit-overview'
// import Toggle from './hooks-tutorial/03-conditional-rendering/03-toggle'

// Custom hooks
import CleanUpFunction from './hooks-tutorial/02-useEffect/05-clean-up-function'
import ToggleExample from './hooks-tutorial/04-custom-hook/01-toggle-example'
import FetchUserData from './hooks-tutorial/04-custom-hook/02-fetch-data'
import NavbarC from './hooks-tutorial/05-context-api/02-context-api/Navbar'
import Navbar from './hooks-tutorial/05-context-api/01-prop-drilling/Navbar'
import NavbarCh from './hooks-tutorial/05-context-api/03-context-api custom-hook/Navbar'

function App() {
  return (
    <>
      <h1>React hooks</h1>
      {/* useState */}
      {/* <CounterExample /> */}
      {/* <ArrayExample/> */}
      {/* <ObjectExample /> */}
      {/* <UseStatePrev /> */}

      {/* useEffect */}
      {/* <ExampleUseEffect /> */}
      {/* <MultipleUseEffect /> */}
      {/* <FetchData /> */}
      {/* <CleanUpFunction /> */}

      {/* Conditional rendering */}
      {/* <CircuitOverview /> */}
      {/* <Toggle /> */}
      {/* <ToggleExample /> */}
      {/* <FetchUserData /> */}

      {/* <Navbar /> */}
      {/* <NavbarC /> */}
      <NavbarCh />
    </>
  )
}

export default App
