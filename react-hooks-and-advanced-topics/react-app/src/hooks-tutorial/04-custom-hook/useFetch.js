import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 10000)

    const getData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) {
          throw new Error('Opss.. something went wrong. Server error')
        }
        const json = await response.json()
        setHasError(false)
        setData(json)
      } catch (error) {
        let currentErrorMessage = ''
        if (error.name === 'AbortError') {
          currentErrorMessage = 'Server not responding more than 10 seconds'
        } else {
          currentErrorMessage = error.message
        }
        console.error('Error:', currentErrorMessage)
        setHasError(true)
        setErrorMessage(currentErrorMessage)
      } finally {
        setIsLoading(false)
      }
    }
    getData()

    return () => {
      controller.abort()
      clearTimeout(timer)
    }
  }, [url])

  return { data, isLoading, hasError, errorMessage }
}
export default useFetch
