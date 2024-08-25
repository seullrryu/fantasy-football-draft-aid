import { useState, useMemo, useEffect } from 'react';
import useStore from '../store';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	Link,
	DropdownItem,
	Button,
} from '@nextui-org/react';
import Info from '../../json/playerInfo.json';

export default function Teams() {
	const players = useStore((state) => state.players);
	const [teams, setTeams] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState(new Set(['KC']));

	const selectedValue = useMemo(
		() => Array.from(selectedTeam).join(', ').replaceAll('_', ' '),
		[selectedTeam]
	);

	const offensiveLineRankings = [
		'Detroit Lions',
		'Philadelphia Eagles',
		'Atlanta Falcons',
		'Cleveland Browns',
		'Kansas City Chiefs',
		'Indianapolis Colts',
		'Los Angeles Chargers',
		'New York Jets',
		'Minnesota Vikings',
		'Los Angeles Rams',
		'Cincinnati Bengals',
		'Houston Texans',
		'Dallas Cowboys',
		'Buffalo Bills',
		'Pittsburgh Steelers',
		'Denver Broncos',
		'Tampa Bay Buccaneers',
		'San Francisco 49ers',
		'Green Bay Packers',
		'Chicago Bears',
		'Baltimore Ravens',
		'Las Vegas Raiders',
		'Jacksonville Jaguars',
		'Carolina Panthers',
		'Miami Dolphins',
		'Arizona Cardinals',
		'Tennessee Titans',
		'Seattle Seahawks',
		'New England Patriots',
		'New York Giants',
		'New Orleans Saints',
		'Washington Commanders',
	];

	useEffect(() => {
		setTeams([...new Set(players.map((player) => player.TEAM).sort())]);
	}, []);

	return (
		<section className="flex">
			<Dropdown shouldBlockScroll={false}>
				<DropdownTrigger>
					<Button variant="bordered" className="capitalize">
						{selectedValue}
					</Button>
				</DropdownTrigger>
				<DropdownMenu
					variant="flat"
					disallowEmptySelection
					selectionMode="single"
					selectedKeys={selectedTeam}
					onSelectionChange={setSelectedTeam}>
					{teams.map((team) => {
						return <DropdownItem key={team}>{team}</DropdownItem>;
					})}
				</DropdownMenu>
			</Dropdown>
			<div className="ml-28 mr-6 w-1/2">
				<h2 className="text-center">Depth Chart</h2>
				<Table className="my-6" aria-label="Example static collection table">
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
						{players.map((player) => {
							if (
								player['TEAM'] === selectedValue &&
								player['position'].substring(0, 2) === 'QB'
							) {
								return (
									<TableRow
										className={'bg-orange-100'}
										key={player['name']}
										selected={true}>
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

					{/* <TableHeader>
						<TableColumn>Tier</TableColumn>
						<TableColumn>Name</TableColumn>
						<TableColumn>POS</TableColumn>
						<TableColumn>Age</TableColumn>
						<TableColumn>Year</TableColumn>
						<TableColumn>BYE</TableColumn>
					</TableHeader>
					<TableBody>
						{players.map((player) => {
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
								player['TEAM'] === selectedValue &&
								player['POS'].substring(0, 2) === 'QB'
							)
								return (
									<TableRow
										className="bg-orange-100"
										key={player['PLAYER NAME']}
										selected={true}>
										<TableCell>{player['TIERS']}</TableCell>
										<TableCell className="max-w-16">{player['PLAYER NAME']}</TableCell>
										<TableCell className="max-w-10">{player['POS']}</TableCell>
										<TableCell>{age}</TableCell>
										<TableCell>{year}</TableCell>
										<TableCell>{player['BYE WEEK']}</TableCell>
									</TableRow>
								);
						})}
					</TableBody> */}
				</Table>
				<Table className="mb-6 bg-blue-100" aria-label="Example static collection table">
					{/* <TableHeader>
						<TableColumn>Tier</TableColumn>
						<TableColumn>Name</TableColumn>
						<TableColumn>POS</TableColumn>
						<TableColumn>Age</TableColumn>
						<TableColumn>Year</TableColumn>
						<TableColumn>BYE</TableColumn>
					</TableHeader>
					<TableBody>
						{players.map((player) => {
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
								player['TEAM'] === selectedValue &&
								player['POS'].substring(0, 2) === 'RB'
							)
								return (
									<TableRow
										className="bg-blue-100"
										key={player['PLAYER NAME']}
										selected={true}>
										<TableCell>{player['TIERS']}</TableCell>
										<TableCell className="max-w-16">{player['PLAYER NAME']}</TableCell>
										<TableCell className="max-w-10">{player['POS']}</TableCell>
										<TableCell>{age}</TableCell>
										<TableCell>{year}</TableCell>
										<TableCell>{player['BYE WEEK']}</TableCell>
									</TableRow>
								);
						})}
					</TableBody> */}
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
						{players.map((player) => {
							if (
								player['TEAM'] === selectedValue &&
								player['position'].substring(0, 2) === 'RB'
							) {
								return (
									<TableRow
										className={'bg-blue-100'}
										key={player['name']}
										selected={true}>
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
				<Table className="mb-6 bg-lime-100" aria-label="Example static collection table">
					{/* <TableHeader>
						<TableColumn>Tier</TableColumn>
						<TableColumn>Name</TableColumn>
						<TableColumn>POS</TableColumn>
						<TableColumn>Age</TableColumn>
						<TableColumn>Year</TableColumn>
						<TableColumn>BYE</TableColumn>
					</TableHeader>
					<TableBody>
						{players.map((player) => {
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
								player['TEAM'] === selectedValue &&
								player['POS'].substring(0, 2) === 'WR'
							)
								return (
									<TableRow
										className="bg-lime-100"
										key={player['PLAYER NAME']}
										selected={true}>
										<TableCell>{player['TIERS']}</TableCell>
										<TableCell className="max-w-16">{player['PLAYER NAME']}</TableCell>
										<TableCell className="max-w-10">{player['POS']}</TableCell>
										<TableCell>{age}</TableCell>
										<TableCell>{year}</TableCell>
										<TableCell>{player['BYE WEEK']}</TableCell>
									</TableRow>
								);
						})}
					</TableBody> */}
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
						{players.map((player) => {
							if (
								player['TEAM'] === selectedValue &&
								player['position'].substring(0, 2) === 'WR'
							) {
								return (
									<TableRow
										className={'bg-lime-100'}
										key={player['name']}
										selected={true}>
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
				<Table className="mb-6" aria-label="Example static collection table">
					{/* <TableHeader>
						<TableColumn>Tier</TableColumn>
						<TableColumn>Name</TableColumn>
						<TableColumn>POS</TableColumn>
						<TableColumn>Age</TableColumn>
						<TableColumn>Year</TableColumn>
						<TableColumn>BYE</TableColumn>
					</TableHeader>
					<TableBody>
						{players.map((player) => {
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
								player['TEAM'] === selectedValue &&
								player['POS'].substring(0, 2) === 'TE'
							)
								return (
									<TableRow
										className="bg-purple-100"
										key={player['PLAYER NAME']}
										selected={true}>
										<TableCell>{player['TIERS']}</TableCell>
										<TableCell className="max-w-16">{player['PLAYER NAME']}</TableCell>
										<TableCell className="max-w-10">{player['POS']}</TableCell>
										<TableCell>{age}</TableCell>
										<TableCell>{year}</TableCell>
										<TableCell>{player['BYE WEEK']}</TableCell>
									</TableRow>
								);
						})}
					</TableBody> */}
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
						{players.map((player) => {
							if (
								player['TEAM'] === selectedValue &&
								player['position'].substring(0, 2) === 'TE'
							) {
								return (
									<TableRow
										className={'bg-purple-100'}
										key={player['name']}
										selected={true}>
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
			</div>
			<div className="w-1/3">
				<Link className="text-center" href="https://www.thescore.com/news/3044100">
					2024 Offensive Line Rankings
				</Link>
				<Table className="mt-6 max-h-[80vh]" aria-label="Example static collection table">
					<TableHeader>
						<TableColumn>Rank</TableColumn>
						<TableColumn>Team</TableColumn>
					</TableHeader>
					<TableBody>
						{offensiveLineRankings.map((team, index) => {
							return (
								<TableRow className="bg-sky-100" key={team} selected={true}>
									<TableCell>{index + 1}</TableCell>
									<TableCell className="">{team}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</section>
	);
}
