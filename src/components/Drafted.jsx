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
	// const [filterValue, setFilterValue] = React.useState("");

	// const topContent = React.useMemo(() => {
	// 	return (
	// 		<div className="flex flex-col gap-4">
	// 			<div className="flex justify-between gap-3 items-end">
	// 				<Input
	// 					isClearable
	// 					className="w-full sm:max-w-[44%]"
	// 					placeholder="Search by name..."
	// 					startContent={<SearchIcon />}
	// 					value={filterValue}
	// 					onClear={() => onClear()}
	// 					onValueChange={onSearchChange}
	// 				/>
	// 			</div>
	// 		</div>
	// 	);
	// }, [filterValue, onSearchChange]);

	return (
		<section>
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
		</section>
	);
}
