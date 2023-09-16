import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'

function App() {
	const { movies } = useMovies()

	const handleSubmit = (event) => {
		event.preventDefault()
		const fields = new window.FormData(event.target)
		const query = fields.get('query')
		console.log(query)
	}

	return (
		<div className='page'>
			<header>
				<h1>Movie Search</h1>
				<form className='form' onSubmit={handleSubmit}>
					<input name='query' placeholder='Avengers, Avatar, Jumanji...' />
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
