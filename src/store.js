import { create } from 'zustand';

const useStore = create((set) => ({
	players: [],
	playersInfo: [],
	draftedPlayers: new Set([]),
	setPlayers: (players) => set(() => ({ players: players })),
	setDraftedPlayers: (players) => set(() => ({ draftedPlayers: players })),
	setPlayersInfo: (players) => set(() => ({ playersInfo: players })),
}));

export default useStore;
