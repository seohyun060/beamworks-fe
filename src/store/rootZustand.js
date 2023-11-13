import create from 'zustand';

const useProductStore = create((set) => ({
	selectedSolution: -1,
	setSelectedSolution: (solution) => set({ selectedSolution: solution }),
}));

export default useProductStore;
