import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App() {
	const { fact, refreshFact } = useCatFact()
	const { imageUrl } = useCatImage({ fact })

	const handleClick = async () => {
		refreshFact()
	}

	return (
		<main>
			<h1>Kitties App</h1>
			<button onClick={handleClick}>Get new fact</button>
			{fact && <p>{fact}</p>}
			{imageUrl && (
				<img
					src={imageUrl}
					alt={`Image extracted using the first three words from ${fact}`}
				/>
			)}
		</main>
	)
}

//For horizontal Display
/*
<section>
	{fact && <p>{fact}</p>}
		{imageUrl && (
			<img
				src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
				alt={`Image extracted using the first three words from ${fact}`}
			/>
		)}
</section>
*/
