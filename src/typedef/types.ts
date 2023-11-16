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

export type Solution = {
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

export type Explore = {
	type: string;
	title: string;
	contents: {
		logo1: string;
		logo2: string;
		text: string;
		background: string;
	}[];
};
