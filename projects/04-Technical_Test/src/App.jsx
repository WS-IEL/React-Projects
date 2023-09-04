import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
	const [fact, setFact] = useState()
	const [imageUrl, setImageUrl] = useState()

	//Recover fact when refresh
	useEffect(() => {
		fetch(CAT_ENDPOINT_RANDOM_FACT)
			.then((res) => {
				res.json()
			})
			.then((data) => {
				const { fact } = data
				setFact(fact)
			})
	}, [])

	//Recover image once there's a new fact
	useEffect(() => {
		if (!fact) return

		const firstThreeWords = fact.split(' ', 3).join(' ')

		fetch(
			`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`
		)
			.then((res) => res.json())
			.then((resp) => {
				const { url } = resp
				setImageUrl(url)
			})
	}, [fact])

	return (
		<main>
			<h1>Kitties App</h1>
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
