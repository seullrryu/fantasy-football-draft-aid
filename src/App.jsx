import Mainboard from './components/Mainboard';
import Drafted from './components/Drafted';
import QB from './components/QB';
import RB from './components/RB';
import WR from './components/WR';
import TE from './components/TE';
import useStore from './store';
import { React, useEffect } from 'react';
import { Tabs, Tab } from '@nextui-org/react';

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
		<main className="p-8">
			<Tabs aria-label="Options">
				<Tab key="draftboard" title="Draftboard">
					<div className="flex">
						<Mainboard />
						<section
							className="grid grid-cols-2 gap-4 w-1/2 mb-2 max-h-[75vh]"
							style={{ gridTemplateRows: '45vh 45vh' }}>
							<QB />
							<RB />
							<WR />
							<TE />
						</section>
					</div>
				</Tab>
				<Tab key="teams" title="Teams">
					<div></div>
				</Tab>
				<Tab key="drafted" title="Drafted">
					<Drafted />
				</Tab>
			</Tabs>
		</main>
	);
}

export default App;
