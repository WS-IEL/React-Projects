const CAT_GET_RANDOM_IMAGE = `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`
const firstThreeWords = fact.split(' ', 3).join(' ')

export const getRandomImage = async () => {
	const res = await fetch(CAT_GET_RANDOM_IMAGE)
	const data = await res.json()
	const { url } = resp
	setImageUrl(url)
}
