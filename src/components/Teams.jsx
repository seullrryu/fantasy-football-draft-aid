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
	DropdownSection,
	DropdownItem,
	Button,
} from '@nextui-org/react';

export default function Teams() {
	const players = useStore((state) => state.players);
	const playersInfo = useStore((state) => state.playersInfo);

	const [teams, setTeams] = useState([]);
	const [selectedTeam, setSelectedTeam] = useState(new Set(['KC']));

	const selectedValue = useMemo(
		() => Array.from(selectedTeam).join(', ').replaceAll('_', ' '),
		[selectedTeam]
	);

	useEffect(() => {
		setTeams([...new Set(playersInfo.map((player) => player.team).sort())]);
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
			<div className="ml-28 w-1/2">
				<Table className="mb-6" aria-label="Example static collection table">
					<TableHeader>
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
								player['TEAM'] === selectedValue &&
								player['POS'].substring(0, 2) === 'QB'
							)
								return (
									<TableRow key={player['PLAYER NAME']} selected={true}>
										<TableCell>{player['TIERS']}</TableCell>
										<TableCell className="max-w-16">{player['PLAYER NAME']}</TableCell>
										<TableCell className="max-w-10">{player['POS']}</TableCell>
										<TableCell>{age}</TableCell>
										<TableCell>{year}</TableCell>
										<TableCell>{player['BYE WEEK']}</TableCell>
									</TableRow>
								);
						})}
					</TableBody>
				</Table>
				<Table className="mb-6 bg-blue-100" aria-label="Example static collection table">
					<TableHeader>
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
								player['TEAM'] === selectedValue &&
								player['POS'].substring(0, 2) === 'RB'
							)
								return (
									<TableRow key={player['PLAYER NAME']} selected={true}>
										<TableCell>{player['TIERS']}</TableCell>
										<TableCell className="max-w-16">{player['PLAYER NAME']}</TableCell>
										<TableCell className="max-w-10">{player['POS']}</TableCell>
										<TableCell>{age}</TableCell>
										<TableCell>{year}</TableCell>
										<TableCell>{player['BYE WEEK']}</TableCell>
									</TableRow>
								);
						})}
					</TableBody>
				</Table>
				<Table className="mb-6 bg-lime-100" aria-label="Example static collection table">
					<TableHeader>
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
								player['TEAM'] === selectedValue &&
								player['POS'].substring(0, 2) === 'WR'
							)
								return (
									<TableRow key={player['PLAYER NAME']} selected={true}>
										<TableCell>{player['TIERS']}</TableCell>
										<TableCell className="max-w-16">{player['PLAYER NAME']}</TableCell>
										<TableCell className="max-w-10">{player['POS']}</TableCell>
										<TableCell>{age}</TableCell>
										<TableCell>{year}</TableCell>
										<TableCell>{player['BYE WEEK']}</TableCell>
									</TableRow>
								);
						})}
					</TableBody>
				</Table>
				<Table
					className="mb-6 bg-purple-100"
					aria-label="Example static collection table">
					<TableHeader>
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
								player['TEAM'] === selectedValue &&
								player['POS'].substring(0, 2) === 'TE'
							)
								return (
									<TableRow key={player['PLAYER NAME']} selected={true}>
										<TableCell>{player['TIERS']}</TableCell>
										<TableCell className="max-w-16">{player['PLAYER NAME']}</TableCell>
										<TableCell className="max-w-10">{player['POS']}</TableCell>
										<TableCell>{age}</TableCell>
										<TableCell>{year}</TableCell>
										<TableCell>{player['BYE WEEK']}</TableCell>
									</TableRow>
								);
						})}
					</TableBody>
				</Table>
			</div>
		</section>
	);
}
