import useToggle from './useToggle'

const ToggleExample = () => {
  const { show, toggle } = useToggle(false)
  return (
    <div>
      <h4>Toggle custom hook</h4>
      <button onClick={() => toggle(!show)}>{show ? 'Hide title' : 'Show title'}</button>
      {show && <h2>Movie title</h2>}
    </div>
  )
}
export default ToggleExample
