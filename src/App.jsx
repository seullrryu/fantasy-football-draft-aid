import Mainboard from './components/Mainboard';
import Drafted from './components/Drafted';
import useStore from './store';
import { React, useEffect } from 'react';

function App() {
	const setPlayers = useStore((state) => state.setPlayers);
	const setPlayersInfo = useStore((state) => state.setPlayersInfo);

	const getData = () => {
		fetch('../json/test.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				setPlayers(json);
			});
	};

	const getPlayerInfo = () => {
		fetch('../json/playerInfo.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				setPlayersInfo(json);
			});
	};

	useEffect(() => {
		getData();
		getPlayerInfo();
	}, []);

	return (
		<main>
			<div className="p-8">
				<Mainboard />
				<Drafted />
			</div>
		</main>
	);
}

export default App;
