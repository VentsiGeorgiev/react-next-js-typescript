import useFetch from './useFetch'

const url = 'https://api.github.com/users/QuincyLarson'

const FetchUserData = () => {
  const { data: user, isLoading, hasError, errorMessage } = useFetch(url)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (hasError) {
    return <h2>Error: {errorMessage}</h2>
  }

  return (
    <section>
      <h3>{user.name}</h3>
      <h5>company: {user.company}</h5>
      <p>bio: {user.bio}</p>
    </section>
  )
}
export default FetchUserData
