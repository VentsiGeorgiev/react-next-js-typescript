import { useState } from "react"

const ObjectExample = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 30,
    hobby: 'read books'
  })

  const showNextPerson = () => {
    setPerson({
      name: 'maria',
      age: 26,
      hobby: 'painting'
    })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.hobby}</h4>
      <div>
        <button type="button" onClick={showNextPerson}>Next person</button>
      </div>
    </>
  )
}
export default ObjectExample