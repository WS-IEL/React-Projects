import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useState } from 'react'

function App() {
	const { movies } = useMovies()
	const { query, setQuery } = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
		const { query } = Object.fromEntries(new window.FormData(event.target))
		console.log({ query })
	}

	const handleChange = (event) => {
		setQuery(event.target.value)
	}

	return (
		<div className='page'>
			<header>
				<h1>Movie Search</h1>
				<form className='form' onSubmit={handleSubmit}>
					<input
						onChange={handleChange}
						value={query}
						name='query'
						placeholder='Avengers, Avatar, Jumanji...'
					/>
					<button type='submit'>Search</button>
				</form>
			</header>

			<main>
				<Movies movies={movies} />
			</main>
		</div>
	)
}

export default App
