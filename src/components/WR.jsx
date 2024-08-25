import { React, useEffect, useState, useMemo, useCallback } from 'react';
import useStore from '../store';
import Info from '../../json/playerInfo.json';

import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from '@nextui-org/react';

export default function WR() {
	const rowColor = ['bg-orange-100', 'bg-blue-100', 'bg-lime-100', 'bg-purple-100'];
	const players = useStore((state) => state.players);
	const draftedPlayers = useStore((state) => state.draftedPlayers);

	// const WRs = [...players].filter((player) => player['POS'].substring(0, 2) === 'WR');
	const WRs = [...players].filter((player) => player['position'] === 'WR');

	return (
		<section className="m-1">
			<Table
				color={'danger'}
				className="h-full"
				aria-label="Example static collection table">
				{/* <TableHeader>
					<TableColumn>Tier</TableColumn>
					<TableColumn>Name</TableColumn>
					<TableColumn>Team</TableColumn>
					<TableColumn>POS</TableColumn>
					<TableColumn>Age</TableColumn>
					<TableColumn>Year</TableColumn>
					<TableColumn>BYE</TableColumn>
				</TableHeader> */}
				<TableHeader>
					<TableColumn>Rank</TableColumn>
					<TableColumn>Tier</TableColumn>
					<TableColumn>Name</TableColumn>
					<TableColumn>Team</TableColumn>
					<TableColumn>POS</TableColumn>
					<TableColumn>Age</TableColumn>
					<TableColumn>Year</TableColumn>
				</TableHeader>
				<TableBody>
					{/* {WRs.map((player) => {
						const color = rowColor[player['TIERS'] % 4];
						let age = 0;
						let year = 0;

						for (let i of Info) {
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
					})} */}
					{WRs.map((player) => {
						const color = rowColor[player['tier'] % 4];
						if (draftedPlayers !== 'all' && !draftedPlayers.has(player['name'])) {
							return (
								<TableRow className={color} key={player['name']} selected={true}>
									<TableCell>{player['average_rank']}</TableCell>
									<TableCell>{player['tier']}</TableCell>
									<TableCell>{player['name']}</TableCell>
									<TableCell>{player['TEAM']}</TableCell>
									<TableCell>{player['position']}</TableCell>
									<TableCell>{player['age']}</TableCell>
									<TableCell>{player['year']}</TableCell>
								</TableRow>
							);
						}
					})}
				</TableBody>
			</Table>
		</section>
	);
}
