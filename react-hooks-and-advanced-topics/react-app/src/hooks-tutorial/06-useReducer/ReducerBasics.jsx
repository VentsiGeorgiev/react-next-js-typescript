import { useReducer } from 'react'
import ACTIONS from './actions'
import reducer from './reducer'

const data = [
  { id: 1, name: 'john' },
  { id: 2, name: 'lara' },
  { id: 3, name: 'robert' },
]

const defaultState = {
  people: data,
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { id } })
  }

  const clearItems = () => {
    dispatch({ type: ACTIONS.CLEAR_ITEMS })
  }
  const resetItems = () => {
    dispatch({ type: ACTIONS.RESET_ITEMS })
  }
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {state.people.length > 0 ? (
        <button style={{ marginTop: '2rem' }} onClick={() => clearItems()}>
          clear items
        </button>
      ) : (
        <button style={{ marginTop: '2rem' }} onClick={() => resetItems()}>
          reset items
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
