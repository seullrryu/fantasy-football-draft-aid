import { React, useEffect, useState, useMemo, useCallback } from 'react';
import useStore from '../store';

import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Input,
	getKeyValue,
} from '@nextui-org/react';

export default function Mainboard() {
	const rowColor = ['bg-orange-100', 'bg-blue-100', 'bg-lime-100', 'bg-purple-100'];
	const players = useStore((state) => state.players);
	const playersInfo = useStore((state) => state.playersInfo);
	const draftedPlayers = useStore((state) => state.draftedPlayers);
	const setDraftedPlayers = useStore((state) => state.setDraftedPlayers);

	const [selectedKeys, setSelectedKeys] = useState(new Set([]));

	const mainboardPlayers = [...players];

	// const [draftedPlayers, setDraftedPlayers] = useState(new Set());
	// const [filteredPlayers, setFilteredPlayers] = useState([]);
	// const [info, setInfo] = useState([]);
	const [filterValue, setFilterValue] = useState('');

	// const getData = () => {
	// 	fetch('../../json/test.json', {
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Accept: 'application/json',
	// 		},
	// 	})
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((json) => {
	// 			setPlayers(json);
	// 		});
	// };
	// const getPlayerInfo = () => {
	// 	fetch('../../json/playerInfo.json', {
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Accept: 'application/json',
	// 		},
	// 	})
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((json) => {
	// 			setInfo(json);
	// 		});
	// };
	// const onSearchChange = useCallback(
	// 	(value) => {
	// 		if (value) {
	// 			const idk = [...players].filter((player) => {
	// 				player['PLAYER NAME'].length > 20;
	// 			});
	// 			setFilteredPlayers(idk);
	// 			setPlayers(filteredPlayers);
	// 			setFilterValue(value);
	// 		} else {
	// 			setFilterValue('');
	// 		}
	// 	},
	// 	[players, filteredPlayers]
	// );
	// const onClear = useCallback(() => {
	// 	setFilterValue('');
	// }, []);
	// const topContent = useMemo(() => {
	// 	return (
	// 		<div className="flex flex-col gap-4">
	// 			<div className="flex justify-between gap-3 items-end">
	// 				<Input
	// 					isClearable
	// 					className="w-full"
	// 					placeholder="Search by name..."
	// 					value={filterValue}
	// 					onClear={() => onClear()}
	// 					onValueChange={onSearchChange}
	// 				/>
	// 			</div>
	// 		</div>
	// 	);
	// }, [filterValue, players.length, onSearchChange]);

	useEffect(() => {
		setDraftedPlayers(selectedKeys);
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
		</section>
	);
}
