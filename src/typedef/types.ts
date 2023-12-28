export type EInput = React.ChangeEvent<HTMLInputElement>;
export type EClick = React.MouseEvent;
export type ESubmit = React.FormEvent;
export type ETextArea = React.ChangeEvent<HTMLTextAreaElement>;
export type EFile = React.ChangeEvent<HTMLInputElement>;
export type VoidFunc = () => void;

export type MainNews = {
	content: string;
	date: Date;
	image: string;
	title: string;
	type: string;
};

export type SolutionType = {
	index: number;
	problem: string;
	solution: string;
};

export type CadbMode = {
	type: string;
	title: string;
	descript: string;
	button: string;
	modeOff: string;
	modeOn: string;
	image1: string;
	image2: string;
	image3: string;
};

export type ExploreType = {
	type: string;
	title: string;
	contents: {
		logo1: string;
		logo2: string;
		text: string;
		background: string;
		path: string;
	}[];
};
export type NavTitle = {
	label: string;
	path: string;
};

export type NavContext = {
	title: string;
	context: {
		label: string;
		path: string;
	}[];
};

export type CadrContent = {
	type: string;
	header: string;
	body: string;
	img1: string;
	img2: string;
	backImg: string;
};

export type SolutionContent = {
	type: string;
	title: string;
	solutionList: SolutionType[];
	bannerList: string[];
};

export type NewsThumbnail = {
	image: string;
	title: string;
	content: string;
	date: string;
};

export type PubInfo = {
	id: number;
	type: string;
	title: string;
	author: string;
	date: string;
};
interface PartialPath {
	pathname?: string;
	search?: string;
	hash?: string;
}
type To = string | PartialPath;
export type Navigate = (
	to: To,
	options?: { replace?: boolean; state?: unknown },
) => void;
