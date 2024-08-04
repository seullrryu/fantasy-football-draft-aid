import { React, useEffect, useState, useMemo, useCallback } from 'react';
import useStore from '../store';

import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Button,
} from '@nextui-org/react';

export default function Mainboard() {
	const rowColor = ['bg-orange-100', 'bg-blue-100', 'bg-lime-100', 'bg-purple-100'];
	const players = useStore((state) => state.players);
	const playersInfo = useStore((state) => state.playersInfo);
	const setDraftedPlayers = useStore((state) => state.setDraftedPlayers);

	const [selectedKeys, setSelectedKeys] = useState(
		new Set(
			localStorage.getItem('drafted') === null
				? []
				: JSON.parse(localStorage.getItem('drafted'))
		)
	);

	const mainboardPlayers = [...players];

	useEffect(() => {
		setDraftedPlayers(selectedKeys);
		localStorage.setItem('drafted', JSON.stringify([...selectedKeys]));
	}, [selectedKeys]);

	return (
		<section className="w-1/2 mb-2 mr-4 max-h-[90vh]">
			<Table
				className="h-full"
				color={'danger'}
				selectionMode="multiple"
				aria-label="Example static collection table"
				onSelectionChange={setSelectedKeys}
				selectedKeys={selectedKeys}
				// topContent={topContent}
			>
				<TableHeader>
					<TableColumn>Tier</TableColumn>
					<TableColumn>Name</TableColumn>
					<TableColumn>Team</TableColumn>
					<TableColumn>POS</TableColumn>
					<TableColumn>Age</TableColumn>
					<TableColumn>Year</TableColumn>
					<TableColumn>BYE</TableColumn>
				</TableHeader>
				<TableBody>
					{mainboardPlayers.map((player) => {
						const color = rowColor[player['TIERS'] % 4];
						let age = 0;
						let year = 0;

						for (let i of playersInfo) {
							if (
								i['player'].replace(/ /g, '').toLowerCase() ===
								player['PLAYER NAME'].replace(/ /g, '').toLowerCase()
							) {
								age = i['age'];
								year = i['draft_year'];
							}
						}
						if (player['TIERS'] < 12) {
							return (
								<TableRow className={color} key={player['PLAYER NAME']} selected={true}>
									<TableCell>{player['TIERS']}</TableCell>
									<TableCell>{player['PLAYER NAME']}</TableCell>
									<TableCell>{player['TEAM']}</TableCell>
									<TableCell>{player['POS']}</TableCell>
									<TableCell>{age}</TableCell>
									<TableCell>{year}</TableCell>
									<TableCell>{player['BYE WEEK']}</TableCell>
								</TableRow>
							);
						}
					})}
				</TableBody>
			</Table>
			<Button
				color="danger"
				variant="shadow"
				className="mt-8 capitalize"
				onClick={() => {
					localStorage.removeItem('drafted');
					window.location.reload();
				}}>
				Reset
			</Button>
		</section>
	);
}
