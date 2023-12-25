import { create } from 'zustand';
import images from 'src/assets/images';
const usePubPageStore = create((set) => ({
	currentPage: 1,
	setCurrentPage: (page) => set((state) => ({ ...state, currentPage: page })),
	totalPage: 1,
	setTotalPage: (total) => set((state) => ({ ...state, totalPage: total })),
	// currentPages: [],
	// setCurrentPages: (pages) =>
	// 	set((state) => ({ ...state, currentPages: pages })),
	onMovePage: (type, startIndex, endIndex) => {
		set((state) => {
			let newPage;
			if (type === 'next') {
				newPage = endIndex + 1;
			} else if (type === 'prev') {
				newPage = startIndex - 1;
			} else if (type === 'start') {
				newPage = 1;
			} else {
				newPage = state.totalPage;
			}
			return { ...state, currentPage: newPage };
		});
	},
	onNumberClick: (number) =>
		set((state) => ({ ...state, currentPage: number })),
}));

export default usePubPageStore;
