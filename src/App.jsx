import { useState, useEffect, useRef } from 'react'
import { useMovie } from './hooks/useMovies'
import './App.css'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovie({ search })

  // const inputRef = useRef()

  // Obteniendo datos del formulario forma no controlada
  const handleSubmit = e => {
    /*
    e.preventDefault()
    const input = inputRef.current
    const value = input.value
    alert(value)
    */

    e.preventDefault()
    getMovies()
    // const { query } = Object.fromEntries(new window.FormData(e.target))
    //  console.log({ search })
  }

  // forma controlada tiene desventajas es mucho mas lento pero mejor para validar la data del form
  const handleChange = e => {
    updateSearch(e.target.value)

    /*
    //validaciones
    const newQuery = e.target.value
    setQuery(newQuery)

    if (newQuery == '') {
      setError('I cant search for an empty Movie')
      return
    }

    if (newQuery.match(/^\d+$/)) {
      setError('I cant search for an number Movie')
      return
    }

    if (newQuery.length < 3) {
      setError('Minimun 3 letters required')
      return
    }

    setError(null)
    */

    /*
    // otra validacion por si me llega algo que yo no quiero
      const newQuery = e.target.value
      if(newQuery.startsWith(' ')) return 
      setQuery(e.target.value)
    */
  }

  return (
    <>
      <div className='page'>
        <header>
          <h1>Buscacador de peliculas</h1>
          <form action='' className='form' onSubmit={handleSubmit}>
            <input
              // ref={inputRef}
              type='text'
              placeholder='Movie Name to search'
              name='query'
              value={search}
              onChange={handleChange}
              // border si hay error o no
              style={{
                border: '1px solid transparent',
                borderColor: error ? 'red' : 'transparent'
              }}
            />
            <button type='submit'>Search</button>
          </form>
          {error && (
            <p className='error' style={{ color: 'red' }}>
              {error}{' '}
            </p>
          )}
        </header>
        <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
      </div>
    </>
  )
}

export default App
