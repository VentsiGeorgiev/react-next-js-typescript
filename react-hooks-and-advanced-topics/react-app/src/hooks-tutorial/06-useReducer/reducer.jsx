import ACTIONS from './actions'

const data = [
  { id: 1, name: 'john' },
  { id: 2, name: 'lara' },
  { id: 3, name: 'robert' },
]

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CLEAR_ITEMS:
      return { ...state, people: [] }
    case ACTIONS.RESET_ITEMS:
      return { ...state, people: [...data] }
    case ACTIONS.REMOVE_ITEM: {
      const id = action.payload?.id
      if (typeof id !== 'number') return state
      return { ...state, people: state.people.filter((p) => p.id !== id) }
    }
    default:
      console.error('ACTION NOT FOUND:', action.type)
      return state
  }
}

export default reducer

// if / else block
// const reducer = (state, action) => {
//   if (action.type === 'CLEAR_ITEMS') {
//     return { ...state, people: [] }
//   }
//   if (action.type === 'RESET_ITEMS') {
//     return { ...state, people: defaultState.people }
//   }
//   if (action.type === 'REMOVE_ITEM' && action.payload) {
//     const { id } = action.payload
//     const newPeople = state.people.filter((person) => person.id !== id)
//     return { ...state, people: newPeople }
//   }
//   console.error('ACTION NOT FOUND')
//   return state
// }
