import './App.css'
import { XFollowCard } from './XFollowCard.jsx'

const users = [
	{ userName: 'ws_iel', name: 'Jofiel Silva', isFollowing: true },
	{ userName: 'elonmusk', name: 'Elon Musk', isFollowing: false },
	{ userName: 'thedankoe', name: 'Dan Koe', isFollowing: true },
	{ userName: 'ws_const', name: 'Jofiel Silva', isFollowing: true },
	{ userName: 'ws_dsign', name: 'Jofiel Silva', isFollowing: true },
]

export function App() {
	return (
		<section className='App'>
			{users.map(({ userName, name, isFollowing }) => (
				<XFollowCard
					key={userName}
					userName={userName}
					initialIsFollowing={isFollowing}>
					{name}
				</XFollowCard>
			))}
		</section>
	)
}

export default App
