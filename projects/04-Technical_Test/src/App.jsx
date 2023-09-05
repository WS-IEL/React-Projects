import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function useCatImage({ fact }) {
	const [imageUrl, setImageUrl] = useState()

	//Recover image once there's a new fact
	useEffect(() => {
		if (!fact) return

		

	return { imageUrl }
}

export function App() {
	const [fact, setFact] = useState()
	const { imageUrl } = useCatImage({ fact })

	//Recover fact when refresh
	useEffect(() => {
		getRandomFact().then((newFact) => setFact(newFact))
	}, [])

	const handleClick = async () => {
		const newFact = await getRandomFact()
		setFact(newFact)
	}

	return (
		<main>
			<h1>Kitties App</h1>
			<button onClick={handleClick}>Get new fact</button>
			{fact && <p>{fact}</p>}
			{imageUrl && (
				<img
					src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
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
