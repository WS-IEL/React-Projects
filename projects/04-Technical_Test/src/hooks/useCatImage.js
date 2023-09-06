import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
	const [imageUrl, setImageUrl] = useState()

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

	return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
