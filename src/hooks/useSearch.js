import { useEffect,useState,useRef } from "react"

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  // forma 1 de validar y la 3 seria en el handlechange
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search == '') {
      setError('I cant search for an empty Movie')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('I cant search for an number Movie')
      return
    }

    if (search.length < 3) {
      setError('Minimun 3 letters required')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
