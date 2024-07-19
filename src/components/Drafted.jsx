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

export default function Drafted() {
	const draftedPlayers = useStore((state) => state.draftedPlayers);

	return (
		<Table
			className="w-1/3 mb-2 max-h-[90vh]"
			aria-label="Example static collection table">
			<TableHeader>
				<TableColumn>DRAFTED</TableColumn>
			</TableHeader>
			<TableBody>
				{draftedPlayers !== 'all' ? (
					[...draftedPlayers].map((player) => {
						return (
							<TableRow key={player}>
								<TableCell>{player}</TableCell>
							</TableRow>
						);
					})
				) : (
					<TableRow key={'all'}>
						<TableCell>{'All Players'}</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
