import { create } from 'zustand';

const useStore = create((set) => ({
	players: [],
	draftedPlayers: new Set([]),
	setPlayers: (players) => set(() => ({ players: players })),
	setDraftedPlayers: (players) => set(() => ({ draftedPlayers: players })),
}));

export default useStore;
