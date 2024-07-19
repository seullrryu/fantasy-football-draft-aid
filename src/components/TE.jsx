import { React, useEffect, useState, useMemo, useCallback } from 'react';
import useStore from '../store';

import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from '@nextui-org/react';

export default function TE() {
	const rowColor = ['bg-orange-100', 'bg-blue-100', 'bg-lime-100', 'bg-purple-100'];
	const players = useStore((state) => state.players);
	const playersInfo = useStore((state) => state.playersInfo);
	const draftedPlayers = useStore((state) => state.draftedPlayers);

	const TEs = [...players].filter((player) => player['POS'].substring(0, 2) === 'TE');

	return (
		<section className="m-1">
			<Table
				color={'danger'}
				className="h-full"
				aria-label="Example static collection table">
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
					{TEs.map((player) => {
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
						if (
							player['TIERS'] < 12 &&
							draftedPlayers !== 'all' &&
							!draftedPlayers.has(player['PLAYER NAME'])
						) {
							return (
								<TableRow className={color} key={player['PLAYER NAME']}>
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
