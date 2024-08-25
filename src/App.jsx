import Mainboard from './components/Mainboard';
import Drafted from './components/Drafted';
import QB from './components/QB';
import RB from './components/RB';
import WR from './components/WR';
import TE from './components/TE';
import Teams from './components/Teams';
import useStore from './store';
import { React, useEffect } from 'react';
import { Tabs, Tab } from '@nextui-org/react';
import Info from '../json/playerInfo.json';

function App() {
	const setPlayers = useStore((state) => state.setPlayers);

	const getData = async () => {
		// This is if you want to use fantasy pros rankings
		// fetch('../json/rankings.json', {
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Accept: 'application/json',
		// 	},
		// })
		// 	.then((response) => {
		// 		return response.json();
		// 	})
		// 	.then((json) => {
		// 		setPlayers(json);
		// 	});

		// This is for using boris chen rankings via Jay Zheng's API
		try {
			const response = await fetch(
				'https://jayzheng-ff-api.herokuapp.com/rankings?format=half_ppr'
			);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}
			const json = await response.json();
			let mainboardPlayers = [...json['rankings']];

			mainboardPlayers.forEach((player) => {
				for (let i of Info) {
					if (
						i['player'].replace(/ /g, '').toLowerCase() ===
						player['name'].replace(/ /g, '').toLowerCase()
					) {
						player['age'] = i['age'];
						player['TEAM'] = i['team'];
						player['year'] = i['draft_year'];
					}
				}
			});

			mainboardPlayers = mainboardPlayers.sort((a, b) => a.average_rank - b.average_rank);

			setPlayers(mainboardPlayers);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getData();
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
					<Teams />
				</Tab>
				<Tab key="drafted" title="Drafted">
					<Drafted />
				</Tab>
			</Tabs>
		</main>
	);
}

export default App;
